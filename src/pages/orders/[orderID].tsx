import BuyerOrderExecution from "@/components/Exchange/BuyerOrder";
import SellerOrderExecution from "@/components/Exchange/SellerOrder";
import LoadingAnimation from "@/components/shared/Loading";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IOrder } from "../../../lib/database/orders";

export default function OrderID() {
  const router = useRouter();
  const orderID = router.query.orderID;

  const [order, setOrder] = useState<IOrder>();
  const [isLoading, setIsLoading] = useState(true);
  const [isBuyer, setIsBuyer] = useState(true);
  const toast = useToast();

  const fetchOrderByID = async () => {
    setIsLoading(true);
    const data = {
      _id: router.query.orderID,
      getOne: true,
    };
    try {
      const response = await fetch("/api/Orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseData = await response.json();
        const order = responseData?.order;
        setOrder(order);
        console.log("responseData:", order);

        const storedUser = localStorage.getItem("user");

        if (!storedUser) {
          return toast({
            title:
              "User information or provider not found. Please sign in again.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }

        const parsedUser = JSON.parse(storedUser);

        if (parsedUser?.email === order?.seller_email) {
          setIsBuyer(false);
        } else {
          setIsBuyer(true);
        }
      }
    } catch (error) {
      setOrder(undefined);
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderByID();
  }, [orderID]);
  // if (!order) return null;
  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : isBuyer ? (
        <BuyerOrderExecution orderDetails={order} />
      ) : (
        <SellerOrderExecution orderDetails={order} />
      )}
    </>
  );
}
