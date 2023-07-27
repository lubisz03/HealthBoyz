type HandleIsOpenType = {
  type: string;
};

export const handleIsOpen = (): HandleIsOpenType => ({
  type: 'HANDLE_IS_OPEN',
});
