<?php

$url = 'https://connpass.com/api/v1/event/?count=10';

$ch = curl_init();

$options = [
	CURLOPT_URL => $url,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => ['User-Agent: '.$_SERVER['HTTP_USER_AGENT']]
];

curl_setopt_array($ch, $options);

echo json_encode(curl_exec($ch));

curl_close($ch);
