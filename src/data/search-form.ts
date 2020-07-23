export const Prefectures = [
  { value: 'all', label: 'すべて' },
  { value: '北海道', label: '北海道' },
  { value: '東京', label: '東京' },
  { value: '大阪', label: '大阪' },
  { value: '福岡', label: '福岡' },
];

export const OrderBy = [
  { value: '1', label: '更新日時順' },
  { value: '2', label: '開催日時順' },
  { value: '3', label: '新着順' },
];

export const Languages = [
  { value: 'all', label: 'すべて' },
  { value: 'Java', label: 'Java' },
  { value: 'C', label: 'C' },
  { value: 'C++', label: 'C++' },
  { value: 'C#', label: 'C#' },
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'HTML', label: 'HTML' },
  { value: 'CSS', label: 'CSS' },
  { value: 'PHP', label: 'PHP' },
  { value: 'Python', label: 'Python' },
  { value: 'Swift', label: 'Swift' },
  { value: 'Kotlin', label: 'Kotlin' },
  { value: 'SQL', label: 'SQL' },
  { value: 'Unity', label: 'Unity' },
  { value: 'COBOL', label: 'COBOL' },
  { value: 'Bash', label: 'Bash' },
  { value: 'Dart', label: 'Dart' },
  { value: 'Elixir', label: 'Elixir' },
  { value: 'Go', label: 'Go' },
  { value: 'Haskell', label: 'Haskell' },
];

export const Frameworks = [
  { value: 'all', label: 'すべて' },
  { value: 'Ruby on Rails', label: 'Ruby on Rails' },
  { value: 'Express', label: 'Express' },
  { value: 'Angular', label: 'Angular' },
  { value: 'Ionic', label: 'Ionic' },
  { value: 'Django', label: 'Django' },
  { value: 'React', label: 'React' },
  { value: 'Vue', label: 'Vue' },
  { value: 'Spring Boot', label: 'Spring Boot' },
  { value: 'Play', label: 'Play' },
  { value: 'Flask', label: 'Flask' },
  { value: 'FuelPHP', label: 'FuelPHP' },
  { value: 'Zend', label: 'Zend' },
  { value: 'CodeIgniter', label: 'CodeIgniter' },
  { value: 'Laravel', label: 'Laravel' },
  { value: 'CakePHP', label: 'CakePHP' },
  { value: 'Electron', label: 'Electron' },
];

export const EventDate = [
  { value: 'all', label: 'すべて' },
  { value: 'ym', label: '年月指定' },
  { value: 'ymd', label: '年月日指定' },
];

const year = new Date().getFullYear();
export const Year = [
  { value: year.toString(), label: year.toString() },
  { value: (year + 1).toString(), label: (year + 1).toString() },
  { value: (year + 2).toString(), label: (year + 2).toString() },
];

export const Month = [
  { value: '01', label: '1' },
  { value: '02', label: '2' },
  { value: '03', label: '3' },
  { value: '04', label: '4' },
  { value: '05', label: '5' },
  { value: '06', label: '6' },
  { value: '07', label: '7' },
  { value: '08', label: '8' },
  { value: '09', label: '9' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
];

export const Day = [
  { value: '01', label: '1' },
  { value: '02', label: '2' },
  { value: '03', label: '3' },
  { value: '04', label: '4' },
  { value: '05', label: '5' },
  { value: '06', label: '6' },
  { value: '07', label: '7' },
  { value: '08', label: '8' },
  { value: '09', label: '9' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
  { value: '13', label: '13' },
  { value: '14', label: '14' },
  { value: '15', label: '15' },
  { value: '16', label: '16' },
  { value: '17', label: '17' },
  { value: '18', label: '18' },
  { value: '19', label: '19' },
  { value: '20', label: '20' },
  { value: '21', label: '21' },
  { value: '22', label: '22' },
  { value: '23', label: '23' },
  { value: '24', label: '24' },
  { value: '25', label: '25' },
  { value: '26', label: '26' },
  { value: '27', label: '27' },
  { value: '28', label: '28' },
  { value: '29', label: '29' },
  { value: '30', label: '30' },
  { value: '31', label: '31' },
];
