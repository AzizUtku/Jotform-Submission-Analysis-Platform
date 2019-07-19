export const chartTypes = {
  PIE: 'PIE',
  DOUGHNUT: 'DOUGHNUT',
  LINE: 'LINE',
  BAR: 'BAR',
  HORIZONTAL_BAR: 'HORIZONTAL_BAR',
  RADAR: 'RADAR',
  BUBBLE: 'BUBBLE',
  SCATTER: 'SCATTER',
  POLAR: 'POLAR',
};

export const allowedControls = {
  control_yesno: true,
  control_radio: true,
  control_checkbox: true,
  control_fullname: true,
  control_textarea: true,
  control_textbox: true,
  control_email: true,
  control_address: true,
  control_dropdown: true,
  control_number: true,
  control_spinner: true,
  control_rating: true,
  control_scale: true,
  control_phone: false,
  control_matrix: false,
};

export const controlTypes = {
  CONTROL_YESNO: 'control_yesno',
  CONTROL_RADIO: 'control_radio',
  CONTROL_CHECKBOX: 'control_checkbox',
  CONTROL_FULLNAME: 'control_fullname',
  CONTROL_EMAIL: 'control_email',
  CONTROL_ADDRESS: 'control_address',
  CONTROL_PHONE: 'control_phone',
  CONTROL_TEXTBOX: 'control_textbox',
  CONTROL_TEXTAREA: 'control_textarea',
  CONTROL_DROPDOWN: 'control_dropdown',
  CONTROL_NUMBER: 'control_number',
  CONTROL_SPINNER: 'control_spinner',
  CONTROL_MATRIX: 'control_matrix',
  CONTROL_RATING: 'control_rating',
  CONTROL_SCALE: 'control_scale',
};

export const chartBackgroundColors = [
  '#4459c2',
  '#94bbf9',
  '#F47926',
  '#A760B4',
  '#8F5CBA',
  '#F0EDFF',
];

export const chartHoverBackgroundColors = [
  '#4459c2',
  '#705ABF',
  '#8F5CBA',
  '#A760B4',
  '#9190C5',
  '#F0EDFF',
];

export const materialColors = [
  '#004d40',
  '#006064',
  '#01579b',
  '#311b92',
  '#1a237e',
  '#0d47a1',
  '#aa00ff',
  '#c51162',
  '#b71c1c',
];

export const stopWords = [
  'a',
  'about',
  'above',
  'across',
  'after',
  'again',
  'against',
  'all',
  'almost',
  'alone',
  'along',
  'already',
  'also',
  'although',
  'always',
  'among',
  'an',
  'and',
  'another',
  'any',
  'anybody',
  'anyone',
  'anything',
  'anywhere',
  'are',
  'area',
  'areas',
  'around',
  'as',
  'ask',
  'asked',
  'asking',
  'asks',
  'at',
  'away',
  'b',
  'back',
  'backed',
  'backing',
  'backs',
  'be',
  'became',
  'because',
  'become',
  'becomes',
  'been',
  'before',
  'began',
  'behind',
  'being',
  'beings',
  'best',
  'better',
  'between',
  'big',
  'both',
  'but',
  'by',
  'c',
  'came',
  'can',
  'cannot',
  'case',
  'cases',
  'certain',
  'certainly',
  'clear',
  'clearly',
  'come',
  'could',
  'd',
  'did',
  'differ',
  'different',
  'differently',
  'do',
  'does',
  'done',
  'down',
  'down',
  'downed',
  'downing',
  'downs',
  'during',
  'e',
  'each',
  'early',
  'either',
  'end',
  'ended',
  'ending',
  'ends',
  'enough',
  'even',
  'evenly',
  'ever',
  'every',
  'everybody',
  'everyone',
  'everything',
  'everywhere',
  'f',
  'face',
  'faces',
  'fact',
  'facts',
  'far',
  'felt',
  'few',
  'find',
  'finds',
  'first',
  'for',
  'four',
  'from',
  'full',
  'fully',
  'further',
  'furthered',
  'furthering',
  'furthers',
  'g',
  'gave',
  'general',
  'generally',
  'get',
  'gets',
  'give',
  'given',
  'gives',
  'go',
  'going',
  'good',
  'goods',
  'got',
  'great',
  'greater',
  'greatest',
  'group',
  'grouped',
  'grouping',
  'groups',
  'h',
  'had',
  'has',
  'have',
  'having',
  'he',
  'her',
  'here',
  'herself',
  'high',
  'high',
  'high',
  'higher',
  'highest',
  'him',
  'himself',
  'his',
  'how',
  'however',
  'i',
  'if',
  'important',
  'in',
  'interest',
  'interested',
  'interesting',
  'interests',
  'into',
  'is',
  'it',
  'its',
  'itself',
  'j',
  'just',
  'k',
  'keep',
  'keeps',
  'kind',
  'knew',
  'know',
  'known',
  'knows',
  'l',
  'large',
  'largely',
  'last',
  'later',
  'latest',
  'least',
  'less',
  'let',
  'lets',
  'like',
  'likely',
  'long',
  'longer',
  'longest',
  'm',
  'made',
  'make',
  'making',
  'man',
  'many',
  'may',
  'me',
  'member',
  'members',
  'men',
  'might',
  'more',
  'most',
  'mostly',
  'mr',
  'mrs',
  'much',
  'must',
  'my',
  'myself',
  'n',
  'necessary',
  'need',
  'needed',
  'needing',
  'needs',
  'never',
  'new',
  'new',
  'newer',
  'newest',
  'next',
  'no',
  'nobody',
  'non',
  'noone',
  'not',
  'nothing',
  'now',
  'nowhere',
  'number',
  'numbers',
  'o',
  'of',
  'off',
  'often',
  'old',
  'older',
  'oldest',
  'on',
  'once',
  'one',
  'only',
  'open',
  'opened',
  'opening',
  'opens',
  'or',
  'order',
  'ordered',
  'ordering',
  'orders',
  'other',
  'others',
  'our',
  'out',
  'over',
  'p',
  'part',
  'parted',
  'parting',
  'parts',
  'per',
  'perhaps',
  'place',
  'places',
  'point',
  'pointed',
  'pointing',
  'points',
  'possible',
  'present',
  'presented',
  'presenting',
  'presents',
  'problem',
  'problems',
  'put',
  'puts',
  'q',
  'quite',
  'r',
  'rather',
  'really',
  'right',
  'right',
  'room',
  'rooms',
  's',
  'said',
  'same',
  'saw',
  'say',
  'says',
  'second',
  'seconds',
  'see',
  'seem',
  'seemed',
  'seeming',
  'seems',
  'sees',
  'several',
  'shall',
  'she',
  'should',
  'show',
  'showed',
  'showing',
  'shows',
  'side',
  'sides',
  'since',
  'small',
  'smaller',
  'smallest',
  'so',
  'some',
  'somebody',
  'someone',
  'something',
  'somewhere',
  'state',
  'states',
  'still',
  'still',
  'such',
  'sure',
  't',
  'take',
  'taken',
  'than',
  'that',
  'the',
  'their',
  'them',
  'then',
  'there',
  'therefore',
  'these',
  'they',
  'thing',
  'things',
  'think',
  'thinks',
  'this',
  'those',
  'though',
  'thought',
  'thoughts',
  'three',
  'through',
  'thus',
  'to',
  'today',
  'together',
  'too',
  'took',
  'toward',
  'turn',
  'turned',
  'turning',
  'turns',
  'two',
  'u',
  'under',
  'until',
  'up',
  'upon',
  'us',
  'use',
  'used',
  'uses',
  'v',
  'very',
  'w',
  'want',
  'wanted',
  'wanting',
  'wants',
  'was',
  'way',
  'ways',
  'we',
  'well',
  'wells',
  'went',
  'were',
  'what',
  'when',
  'where',
  'whether',
  'which',
  'while',
  'who',
  'whole',
  'whose',
  'why',
  'will',
  'with',
  'within',
  'without',
  'work',
  'worked',
  'working',
  'works',
  'would',
  'x',
  'y',
  'year',
  'years',
  'yet',
  'you',
  'young',
  'younger',
  'youngest',
  'your',
  'yours',
  'z',
];
