export type ContactItemType = {
  id: 'name' | 'email' | 'phone' | 'message' | 'service';
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
};

export type Inputs = {
  [key in ContactItemType['id']]: string;
};
