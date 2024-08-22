export const DATE_FORMAT = {
  yyyy_mm_dd: 'YYYY-MM-DD',
  dd_mmm_yyyy_at_hh_mm_am: 'DD MMM, YYYY [at] hh:mm A',
  hh_mm_am: 'hh:mm A',
  dddd_dd_mmm_yyyy: 'dddd,DD MMM YYYY',
};
export const COLLECTIONS = {
  users: 'users',
  tasks: 'tasks',
};
export const STORAGEKEYS = {
  userId: '@userId',
  onboarding: '@onboarding',
  user: '@user',
  token: '@token',
  lang: '@language',
  location_visited: '@visited',
};
export const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Satureday',
  'Sunday',
];

export const CategoryType = {
  all: {
    title: 'All',
    id: 0,
  },
};

export enum OrderType {
  FREE_RIDE = 'FreeRide',
  PICKUP = 'Pickup',
  DELIVERY = 'Delivery',
}
export enum PaymentMethodType {
  CASH = 'Cash',
  CARD = 'Card',
}
export enum OrderTypeEnum {
  Pickup = 1,
  Delivery = 2,
}
export enum OrderStatusEnum {
  Pending = 1,
  Accepted = 2,
  Ready = 3,
  RiderAccepted = 4,
  PickedUp = 5,
  Cancelled = 6,
  Delivered = 7,
  OnWay = 8,
}

export const OrderStatuses = {
  Pending: 'Pending',
  Accepted: 'Accepted', //7
  Ready: 'Ready',
  RiderAccepted: 'RiderAccepted',
  PickedUp: 'PickedUp',
  Cancelled: 'Cancelled',
  Delivered: 'Delivered',
  OnWay: 'OnWay',
};

export const RideStatuses = {
  Pending: 'Pending', // new ride request from customer
  Arrived: 'Arrived', // rider arrival on customer location
  PickedUp: 'PickedUp', // rider pickedup the customer
  OnWay: 'OnWay', // rider on the way
  Completed: 'Completed', // rider has completed ride
  Cancelled: 'Cancelled', // rider has cancelled ride
  Accepted: 'Accepted', // rider is willing
};
export enum RideStatusEnum {
  Pending = 1, // new ride request from customer
  Arrived = 2, // rider arrival on customer location
  PickedUp = 3, // rider pickedup the customer
  OnWay = 4, // rider on the way
  Completed = 5, // rider has completed ride
  Cancelled = 6, // rider has cancelled ride
  Accepted = 7, // rider is willing
}

export enum AppRoles {
  USER = 'Customer',
  Rider = 'RidePartner',
  SELLER = 'Admin',
}
export const RiderTripTypes = {
  Upcoming: 'Upcoming',
  Completed: 'Completed',
  Cancelled: 'Cancelled',
};

// Web socket events
export enum OrderEvent {
  NewOrder = 'NewOrder',
  OrderPayment = 'OrderPayment',
  OrderStatus = 'OrderStatus',
  DeleteOrder = 'DeleteOrder',
  CancelOrder = 'CancelOrder',
}
export enum RideEvent {
  NewRide = 'NewRide',
  RideStatus = 'RideStatus',
  RidePayment = 'RidePayment',
  AcceptRide = 'AcceptRide',
  DeclineRide = 'DeclineRide',
  CancelRide = 'CancelRide',
  RiderLocation = 'RiderLocation',
}
export enum ChatEvent {
  NewMessage = 'NewMessage',
}
