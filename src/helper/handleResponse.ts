interface typeResponse {
  res: any;
  type: "success" | "error";
}

export const customResponse = (res: any, type: typeResponse) => {
  return {
    res,
    type,
  };
};
