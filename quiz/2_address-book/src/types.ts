interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  H = 'home',
  O = 'office',
  S = 'studio',
}

export { Contact, PhoneType };
