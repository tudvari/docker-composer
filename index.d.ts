export type DefinitionsDeployment = {
  mode?: string;
  replicas?: number;
  labels?: Labels;
  update_config?: {
    parallelism?: number;
    delay?: string;
    failure_action?: string;
    monitor?: string;
    max_failure_ratio?: number;
  };
  resources?: {
    limits?: DefinitionsResource;
    reservations?: DefinitionsResource;
  };
  restart_policy?: {
    condition?: string;
    delay?: string;
    max_attempts?: number;
    window?: string;
  };
  placement?: {
    constraints?: string[];
  };
} & ({
  mode?: string;
  replicas?: number;
  labels?: Labels;
  update_config?: {
    parallelism?: number;
    delay?: string;
    failure_action?: string;
    monitor?: string;
    max_failure_ratio?: number;
  };
  resources?: {
    limits?: DefinitionsResource;
    reservations?: DefinitionsResource;
  };
  restart_policy?: {
    condition?: string;
    delay?: string;
    max_attempts?: number;
    window?: string;
  };
  placement?: {
    constraints?: string[];
  };
} | null);
export type Labels =
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` ".+".
       */
      [k: string]: string;
    }
  | string[];
export type ListOrDict =
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` ".+".
       */
      [k: string]: string | number | null;
    }
  | string[];
export type ListOfStrings = string[];
export type StringOrList = string | ListOfStrings;
/**
 * This interface was referenced by `PropertiesNetworks`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export type DefinitionsNetwork = {
  driver?: string;
  driver_opts?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.+$".
     */
    [k: string]: string | number;
  };
  ipam?: {
    driver?: string;
    config?: {
      subnet?: string;
    }[];
  };
  external?:
    | boolean
    | {
        name?: string;
      };
  internal?: boolean;
  labels?: Labels;
} & ({
  driver?: string;
  driver_opts?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.+$".
     */
    [k: string]: string | number;
  };
  ipam?: {
    driver?: string;
    config?: {
      subnet?: string;
    }[];
  };
  external?:
    | boolean
    | {
        name?: string;
      };
  internal?: boolean;
  labels?: Labels;
} | null);
/**
 * This interface was referenced by `PropertiesVolumes`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export type DefinitionsVolume = {
  driver?: string;
  driver_opts?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.+$".
     */
    [k: string]: string | number;
  };
  external?:
    | boolean
    | {
        name?: string;
      };
  labels?: Labels;
} & ({
  driver?: string;
  driver_opts?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.+$".
     */
    [k: string]: string | number;
  };
  external?:
    | boolean
    | {
        name?: string;
      };
  labels?: Labels;
} | null);

export interface ConfigSchemaV30Json {
  version: string;
  services?: PropertiesServices;
  networks?: PropertiesNetworks;
  volumes?: PropertiesVolumes;
}
export interface PropertiesServices {
  [k: string]: DefinitionsService;
}
/**
 * This interface was referenced by `PropertiesServices`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export interface DefinitionsService {
  deploy?: DefinitionsDeployment;
  build?:
    | string
    | {
        context?: string;
        dockerfile?: string;
        args?: ListOrDict;
      };
  cap_add?: string[];
  cap_drop?: string[];
  cgroup_parent?: string;
  command?: string | string[];
  container_name?: string;
  depends_on?: ListOfStrings;
  devices?: string[];
  dns?: StringOrList;
  dns_search?: StringOrList;
  domainname?: string;
  entrypoint?: string | string[];
  env_file?: StringOrList;
  environment?: ListOrDict;
  expose?: (string | number)[];
  external_links?: string[];
  extra_hosts?: ListOrDict;
  healthcheck?: DefinitionsHealthcheck;
  hostname?: string;
  image?: string;
  ipc?: string;
  labels?: Labels;
  links?: string[];
  logging?: {
    driver?: string;
    options?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.+$".
       */
      [k: string]: string | number | null;
    };
  };
  mac_address?: string;
  network_mode?: string;
  networks?:
    | ListOfStrings
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
         */
        [k: string]: {
          aliases?: ListOfStrings;
          ipv4_address?: string;
          ipv6_address?: string;
        } | null;
      };
  pid?: string | null;
  ports?: (string | number)[];
  privileged?: boolean;
  read_only?: boolean;
  restart?: string;
  security_opt?: string[];
  shm_size?: number | string;
  sysctls?: ListOrDict;
  stdin_open?: boolean;
  stop_grace_period?: string;
  stop_signal?: string;
  tmpfs?: StringOrList;
  tty?: boolean;
  ulimits?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-z]+$".
     */
    [k: string]:
      | number
      | {
          hard: number;
          soft: number;
        };
  };
  user?: string;
  userns_mode?: string;
  volumes?: string[];
  working_dir?: string;
}
export interface DefinitionsResource {
  cpus?: string;
  memory?: string;
}
export interface DefinitionsHealthcheck {
  disable?: boolean;
  interval?: string;
  retries?: number;
  test?: string | string[];
  timeout?: string;
}
export interface PropertiesNetworks {
  [k: string]: DefinitionsNetwork;
}
export interface PropertiesVolumes {
  [k: string]: DefinitionsVolume;
}
