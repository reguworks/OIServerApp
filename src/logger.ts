import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

export class Logger{
    public static Current: Logger = null;
    public static LevelInfo:string = 'info';
    public static LevelWarn:string = 'warn';
    public static LevelError:string = 'error';

    private _logger:winston.Logger;    

    private constructor() {
		this.initLogger();
    }

    private initLogger():void{
        const { combine, timestamp, label, printf, prettyPrint } = winston.format;
        const plainTextFormat = printf(info => {
            return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
          });
        

        var fileTransport = new (DailyRotateFile)({
            filename: './logs/OIServerApp-%DATE%.log',
            datePattern: 'YYYY-MM-DD',//'YYYY-MM-DD-HH',
            zippedArchive: false,
            //maxSize: '20m',
            maxFiles: '10d'//'14d'
            });
                        

        this._logger = winston.createLogger({
            format: combine(
                label({ label: 'OIServerApp' }),
                timestamp(),
                //plainTextFormat
                prettyPrint()
            ),  
            level: 'info',
            transports: [
              new winston.transports.Console({ level: 'info', format:  plainTextFormat}),
              //new winston.transports.File({ filename: 'ECRCommApp.log' })
              fileTransport
            ]
          });

    }

    public static log(level: string, message:string ):void{
        try{
            Logger.Current._logger.log(level, message);
        }
        catch(err){
            console.log(`Error writing in log file: ${err.message}`);
        }
    }

    public static debug(message:string ):void{
        try{
            Logger.Current._logger.debug(message);
        }
        catch(err){
            console.log(`Error writing in log file: ${err.message}`);
        }
    }

    public static info(message:string ):void{
        try{
            Logger.Current._logger.info(message);
        }
        catch(err){
            console.log(`Error writing in log file: ${err.message}`);
        }
    }

    public static warn(message:string ):void{
        try{
            Logger.Current._logger.warn(message);
        }
        catch(err){
            console.log(`Error writing in log file: ${err.message}`);
        }
    }

    public static error(message:string ):void{
        try{
            Logger.Current._logger.error(message);
        }
        catch(err){
            console.log(`Error writing in log file: ${err.message}`);
        }
    }
       

    public static Init(){
        if(Logger.Current == null){
            let logger = new Logger();

            Logger.Current = logger;
        }
    }
}