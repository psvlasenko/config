export declare enum LogType {
    file = "file",
    dateFile = "dateFile",
    console = "console"
}
export declare class LogCategoryConfig {
    type: LogType;
    filename: string;
    level: string;
}
