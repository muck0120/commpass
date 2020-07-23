export const Prefectures = [
  { value: 'all', label: 'すべて' },
  { value: 'オンライン', label: 'オンライン' },
  { value: '北海道', label: '北海道' },
  { value: '青森県', label: '青森県' },
  { value: '岩手県', label: '岩手県' },
  { value: '宮城県', label: '宮城県' },
  { value: '秋田県', label: '秋田県' },
  { value: '山形県', label: '山形県' },
  { value: '福島県', label: '福島県' },
  { value: '茨城県', label: '茨城県' },
  { value: '栃木県', label: '栃木県' },
  { value: '群馬県', label: '群馬県' },
  { value: '埼玉県', label: '埼玉県' },
  { value: '千葉県', label: '千葉県' },
  { value: '東京都', label: '東京都' },
  { value: '神奈川県', label: '神奈川県' },
  { value: '新潟県', label: '新潟県' },
  { value: '富山県', label: '富山県' },
  { value: '石川県', label: '石川県' },
  { value: '福井県', label: '福井県' },
  { value: '山梨県', label: '山梨県' },
  { value: '長野県', label: '長野県' },
  { value: '岐阜県', label: '岐阜県' },
  { value: '静岡県', label: '静岡県' },
  { value: '愛知県', label: '愛知県' },
  { value: '三重県', label: '三重県' },
  { value: '滋賀県', label: '滋賀県' },
  { value: '京都府', label: '京都府' },
  { value: '大阪府', label: '大阪府' },
  { value: '兵庫県', label: '兵庫県' },
  { value: '奈良県', label: '奈良県' },
  { value: '和歌山県', label: '和歌山県' },
  { value: '鳥取県', label: '鳥取県' },
  { value: '島根県', label: '島根県' },
  { value: '岡山県', label: '岡山県' },
  { value: '広島県', label: '広島県' },
  { value: '山口県', label: '山口県' },
  { value: '徳島県', label: '徳島県' },
  { value: '香川県', label: '香川県' },
  { value: '愛媛県', label: '愛媛県' },
  { value: '高知県', label: '高知県' },
  { value: '福岡県', label: '福岡県' },
  { value: '佐賀県', label: '佐賀県' },
  { value: '長崎県', label: '長崎県' },
  { value: '熊本県', label: '熊本県' },
  { value: '大分県', label: '大分県' },
  { value: '宮崎県', label: '宮崎県' },
  { value: '鹿児島県', label: '鹿児島県' },
  { value: '沖縄県', label: '沖縄県' },
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
