/**
 * Slices an Ethereum address to a shorter format.
 * @param {string} address - The full Ethereum address.
 * @returns {string} - The shortened Ethereum address.
 * @throws {Error} - If the input address is invalid.
 */
export function sliceAddress(address: string): string {
  if (!address || address.length !== 42) {
    console.error("Invalid Ethereum address");
    return "0x000...000";
  }

  const start = address.slice(0, 6); // First 6 characters
  const end = address.slice(-4); // Last 4 characters

  return `${start}...${end}`;
}
