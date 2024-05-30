export interface IUser {
  _id: string;
  avatar?: string;
  username: string;
  clubs?: string[];
  stats: IStats;
  titles: string[];
  roles: userRoles;
  createdAt?: Date;
  updatedAt?: Date;
  matchPassword: (enteredPassword: string) => Promise<boolean>;
}

enum userRoles {
  admin = 'admin',
  user = 'user',
  mod = 'mod',
}

export type OutletContextType = {
  user: IUser | undefined;
  username: string | undefined;
};

export interface IStats {
  userLevel: number;
  userXp: number;
  userXpToNextLevel: number;
  userXpToCurrentLevel: number;
  readingXp: number;
  readingLevel: number;
  readingXpToNextLevel: number;
  readingXpToCurrentLevel: number;
  listeningXp: number;
  listeningLevel: number;
  listeningXpToNextLevel: number;
  listeningXpToCurrentLevel: number;
  charCountVn: number;
  charCountLn: number;
  readingTimeVn: number;
  charCountReading: number;
  pageCountLn: number;
  readingTimeLn: number;
  pageCountManga: number;
  charCountManga: number;
  readingTimeManga: number;
  mangaPages: number;
  listeningTime: number;
  readingTime: number;
  animeEpisodes: number;
  animeWatchingTime: number;
  videoWatchingTime: number;
  lnCount: number;
  readManga: string[];
  watchedAnime: string[];
  playedVn: string[];
  readLn: string[];
}

export type ILoginResponse = Pick<
  IUser,
  '_id' | 'username' | 'stats' | 'avatar' | 'titles' | 'roles'
>;

export interface IRegisterInput {
  username: string;
  password: string;
  passwordConfirmation: string;
}

export interface ILoginInput {
  username: string;
  password: string;
}

export type logoutResponseType = {
  message: string;
};

enum sortTypes {
  asc = 'asc',
  desc = 'desc',
}

export type filterTypes =
  | 'userLevel'
  | 'userXp'
  | 'readingXp'
  | 'readingLevel'
  | 'listeningXp'
  | 'listeningLevel'
  | 'charCountVn'
  | 'charCountLn'
  | 'readingTimeVn'
  | 'charCountReading'
  | 'pageCountLn'
  | 'readingTimeLn'
  | 'pageCountManga'
  | 'charCountManga'
  | 'readingTimeManga'
  | 'mangaPages'
  | 'listeningTime'
  | 'readingTime'
  | 'animeEpisodes'
  | 'animeWatchingTime'
  | 'videoWatchingTime';

export interface IRankingParams {
  page: number;
  limit: number;
  sort: sortTypes;
  filter: filterTypes;
}

export type ILogsParams = Pick<IRankingParams, 'page' | 'limit'>;

export interface updateUserRequest {
  username?: string;
  password?: string;
  avatar?: Buffer;
  newPassword?: string;
  newPasswordConfirm?: string;
}

export interface IEditedFields {
  episodes?: number;
  pages?: number;
  chars?: number;
  time?: number;
  xp?: number;
}

export interface updateLogRequest {
  description?: string;
  time?: number;
  date?: Date;
  contentId?: string;
  episodes?: number;
  pages?: number;
  chars?: number;
}

export interface ILog {
  _id: string;
  user: string;
  type: 'reading' | 'anime' | 'vn' | 'video' | 'ln' | 'manga' | 'audio';
  contentId?: string;
  xp: number;
  private: boolean;
  adult: boolean;
  image?: string;
  description: string;
  editedFields?: IEditedFields | null;
  episodes?: number;
  pages?: number;
  chars?: number;
  time?: number;
  date?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type createLogRequest = Omit<
  ILog,
  '_id' | 'user' | 'xp' | 'editedFields'
>;

export interface IRankingResponse {
  username: string;
  avatar: string;
  stats: Pick<IStats, filterTypes>;
}
