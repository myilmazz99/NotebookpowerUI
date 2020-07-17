const displayOrderStatus = (code) => {
  switch (code) {
    case 0:
      return "Tamamlandı";
    case 1:
      return "Kargoda";
    case 2:
      return "Onay Bekliyor";
    default:
      break;
  }
};

export default displayOrderStatus;
