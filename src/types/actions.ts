export type ActionGen<T> = {
  type: T;
};

export type ActionGenPayload<T, S> = {
  type: T;
  payload: S,
};
