import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useBookQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Default" },
    { value: "name", label: "Alphabetical" },
    { value: "price", label: "Price" },
    { value: "publishedDate", label: "Date" },
  ];

  const setSortOrder = useBookQueryStore((s) => s.setSortOrder);
  const sortOrder = useBookQueryStore((s) => s.bookQuery.sortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {currentSortOrder?.label || "Default"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => setSortOrder(order.value)}
              key={order.label}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
