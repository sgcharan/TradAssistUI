
export const greets = ['Greetings','Pranams','Bonjour'];

export const features: Feature[] = [
  {
    icon: 'trophy-outline',
    name: 'Expert Guidance',
    description: 'Get tutored from your community Experts'
  },
  {
    icon: 'planet-outline',
    name: 'Knowledge Space',
    description: 'Get access to your community space where your questions get answered with clarity'
  },
  {
    icon: 'library-outline',
    name: 'Authentic Resources',
    description: 'Get access to authentic community knowledge base for self learning'
  },
  {
    icon: 'people-outline',
    name: 'Create your community',
    description: 'Get your family and friends on-borad through an invite-only approach'
  }
];

export interface Feature{
  icon: string;
  name: string;
  description: string;
}
