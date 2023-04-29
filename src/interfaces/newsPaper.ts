export interface NewsPaper {
  _id:           string;
  title:         string;
  image:         string;
  abstract:      string;
  creation_date: string;
  languages:     string[];
  publisher:     Publisher;
  link:          string;
}

export interface Publisher {
  id:          string;
  name:        string;
  joined_date: string;
}
