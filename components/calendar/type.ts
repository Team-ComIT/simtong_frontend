export interface EventType {
  start_at: string;
  end_at: string;
  title: string;
  id: string;
  spot: {
    id: string;
    name: string;
  };
}

export interface SpotType {
  id: string;
  name: string;
  // location?: string;
}

export interface ModalType {
  start_at: string;
  first: boolean;
  show: boolean;
  id: number;
}

export interface ScheduleType {
  title: string;
  start_at: string;
  end_at: string;
  id: string;
}

export interface AllScheduleType {
  setting: {
    state: boolean;
    setState: (value: boolean) => void;
  };
  create: {
    state: boolean;
    setState: (value: boolean) => void;
  };
  initial: {
    state: ScheduleType;
    setState: (value: ScheduleType) => void;
  };
  getEvent: () => void;
  event: EventType[];
}

export interface ScheduleSettingType {
  setting: {
    state: boolean;
    setState: (value: boolean) => void;
  };
  create: (value: boolean) => void;
  initial: {
    state: ScheduleType;
    setState: (value: ScheduleType) => void;
  };
  getEvent: () => void;
}

export interface DateType {
  month: number;
  year: number;
  day?: number;
}
