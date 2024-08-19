import { Dispatch, ReactNode } from 'react';

export interface AuthState {
  token: string | null;
}

export interface AuthAction {
  type: string;
  payload: object;
}

export type ProviderProps = {
  children: ReactNode;
};

export interface AuthContextType {
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
  handleLogin: (data: Login) => Promise<void>;
  handleRegister: (data: Register) => Promise<void>;
  handleLogout: () => void;
}

export interface OptionState {
  campaign_data: {
    campaign_type: string;
    URL: string;
    campain_name: string;
  };
  keywords: any[];
  headlines: any[];
  description: any[];
  displayURL: string;
  bidding: object;
  budget_per_day: string;
}

export interface CampaignData {
  id: number;
  campaignName: string;
  clicks: number;
  cost: number;
  impr: number;
  avgCpc: string | number;
}

export interface LocationData {
  campaignId: number;
  location: string;
  clicks: number;
  cost: number;
  impr: number;
  avgCpc: string | number;
}

export interface NegativeKeywords {
  selectedCampaign: string;
  negativeKeywords: string;
  type: string;
}

export interface SelectedLocations {
  campaignId: number;
  location: string;
}

export interface CampaignContextProps {
  option: OptionState;
  setOption: React.Dispatch<React.SetStateAction<OptionState>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  campaignData: CampaignData[];
  setCampaignData: React.Dispatch<React.SetStateAction<CampaignData[]>>;
  compaignTabsValue: string;
  setCompaignTabsValue: React.Dispatch<React.SetStateAction<string>>;
  negativeKeywords: NegativeKeywords[];
  setNegativeKeywords: React.Dispatch<React.SetStateAction<NegativeKeywords[]>>;
  locationData: LocationData[];
  setLocationData: React.Dispatch<React.SetStateAction<LocationData[]>>;
  selectedLocations: SelectedLocations[];
  setSelectedLocations: React.Dispatch<
    React.SetStateAction<SelectedLocations[]>
  >;
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface Login {
  email: string;
  password: string;
}

export interface Register {
  name: string;
  userName: string;
  email: string;
  password: string;
}

export interface Profile {
  first_name: string;
  last_name: string;
  street: string;
  city: string;
  state: string;
  country: string;
}

export interface UrlFormValues {
  website: string;
  campName: string;
}

export interface BiddingFormValues {
  biddingFocus: string;
  amount: string;
  customValue: string;
  spending: string;
}

export interface CreateYourAddValues {
  finalURL: string;
  displayURL1: string;
  displayURL2: string;
  headline1: string;
  headline2: string;
  headline3: string;
  description1: string;
  description2: string;
}

export interface Keyword {
  keyword: string;
  type: string;
}

export interface Location {
  name: string;
  reach: string;
}
