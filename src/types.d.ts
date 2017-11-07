

declare namespace NodeJS {
  export interface Global {
    _google_trace_agent: any;
  }
}

interface MonitoredResource {
  type?: string;
  labels?: {[key: string]: string};
}

declare module '@google-cloud/common' {
  interface Log {
    alert(entry: Entry|Entry[]) :void;
  }
}
