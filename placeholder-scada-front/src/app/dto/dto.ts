export interface Alarm {
    Id: number,
    Type: AlarmType,
    Priority: number,
    TagId: number,
    Threshold: number
}
export enum AlarmType {
    LOW, HIGH
}

export interface AnalogInput {
    Id: number | 0,
    Description: string | null,
    Address: number,
    ScanTime: number,
    LowLimit: number,
    HighLimit: number,
    Units: string | null,
    Alarms: Alarm[],
    IsOn: boolean,
    CurrentValue: number,
    ReadTime: string
}

export interface DigitalInput {
    Id: number,
    Description: string | null,
    Address: number,
    ScanTime: number,
    IsOn: boolean,
    CurrentValue: number,
    ReadTime: string
}

export interface TrendingState {
    AnalogInputs: AnalogInput[],
    DigitalInputs: DigitalInput[]
}