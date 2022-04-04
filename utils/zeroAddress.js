import { isAddress } from "@ethersproject/address";
import { AddressZero } from "@ethersproject/constants";

export const OtherAddressZero = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

export function isAddressZero(address) {
  const lowerCaseAddress = (address || "").toLowerCase();
  return (
    isAddress(lowerCaseAddress) &&
    (lowerCaseAddress === AddressZero || lowerCaseAddress === OtherAddressZero)
  );
}
