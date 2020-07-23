<?php

$query_string = [];
foreach ($_GET as $key => $value) {
  array_push($query_string, $key . '=' . $value);
}

$url = 'https://connpass.com/api/v1/event/?' . implode($query_string, '&');

$ch = curl_init();

$options = [
	CURLOPT_URL => $url,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => ['User-Agent: '.$_SERVER['HTTP_USER_AGENT']]
];

curl_setopt_array($ch, $options);

echo json_encode(curl_exec($ch));

curl_close($ch);
