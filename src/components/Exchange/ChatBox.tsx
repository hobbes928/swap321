import React, { useState, useEffect, useCallback } from 'react';
import { Conversation, DecodedMessage, Client } from '@xmtp/xmtp-js';
import { Box, VStack, Input, Button, Text, Flex, useColorModeValue, Spinner } from '@chakra-ui/react';
import { useXmtp } from '@/hooks/useXmtp';
import { ethers } from 'ethers';

interface ChatBoxProps {
  recipientAddress: string;
  orderID: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ recipientAddress, orderID }) => {
  const { client, isInitialized } = useXmtp();
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<DecodedMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const bgColor = useColorModeValue('gray.700', 'gray.800');
  const textColor = useColorModeValue('white', 'gray.100');
  const inputBgColor = useColorModeValue('gray.600', 'gray.700');
  const buttonColorScheme = 'purple';

  const loadConversation = useCallback(async () => {
    if (!client || !recipientAddress || !orderID) return;

    try {
      if (!ethers.isAddress(recipientAddress)) {
        console.error('Invalid recipient address:', recipientAddress);
        return;
      }

      console.log('Loading conversation...', recipientAddress, orderID);
      const topic = `order:${orderID}`;
      let conv: Conversation;
      
      try {
        const existingConversations = await client.conversations.list();
        conv = existingConversations.find(c => c.topic === topic) || 
               await client.conversations.newConversation(recipientAddress, { conversationId: topic, metadata: { orderID: topic } });
      } catch (error) {
        console.error('Error creating/loading conversation:', error);
        return;
      }
      
      console.log('Conversation loaded:', conv);
      setConversation(conv);

      const msgs = await conv.messages();
      console.log('Messages loaded:', msgs);
      setMessages(msgs);
    } catch (error) {
      console.error('Error loading conversation:', error);
    } finally {
      setIsLoading(false);
    }
  }, [client, recipientAddress, orderID]);

  const streamMessages = useCallback(async () => {
    if (!conversation) return;

    try {
      console.log('Streaming messages...');
      const stream = await conversation.streamMessages();
      for await (const msg of stream) {
        console.log('New message received:', msg);
        setMessages((prevMessages) => [...prevMessages, msg]);
      }
    } catch (error) {
      console.error('Error streaming messages:', error);
    }
  }, [conversation]);

  useEffect(() => {
    if (isInitialized && recipientAddress && orderID) {
      loadConversation();
    }
  }, [isInitialized, recipientAddress, orderID, loadConversation]);

  useEffect(() => {
    if (conversation) {
      streamMessages();
    }
  }, [conversation, streamMessages]);

  const sendMessage = async () => {
    if (!conversation || !newMessage.trim()) return;

    try {
      console.log('Sending message:', newMessage);
      await conversation.send(newMessage);
      console.log('Message sent successfully');
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  if (!isInitialized || isLoading) {
    return (
      <Box bg={bgColor} color={textColor} p={4} borderRadius="md">
        <Flex justify="center" align="center" height="300px">
          <Spinner size="xl" />
        </Flex>
      </Box>
    );
  }

  return (
    <Box bg={bgColor} color={textColor} p={4} borderRadius="md">
      <VStack spacing={4} align="stretch">
        <Box height="300px" overflowY="auto" p={4} borderRadius="md" border="1px" borderColor="gray.600">
          {messages.map((msg) => (
            <Text key={msg.id}>
              <strong>{msg.senderAddress === client?.address ? 'You' : 'Other'}:</strong> {msg.content}
            </Text>
          ))}
        </Box>
        <Flex>
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            bg={inputBgColor}
            color={textColor}
            _placeholder={{ color: 'gray.400' }}
          />
          <Button onClick={sendMessage} ml={2} colorScheme={buttonColorScheme}>
            Send
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default ChatBox;