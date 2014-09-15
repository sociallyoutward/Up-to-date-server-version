<?php
	session_start();
	    // added in v4.0.5
	require_once( 'Facebook/HttpClients/FacebookHttpable.php' );
	require_once( 'Facebook/HttpClients/FacebookCurl.php' );
	require_once( 'Facebook/HttpClients/FacebookCurlHttpClient.php' );

	// added in v4.0.0
	require_once( 'Facebook/FacebookSession.php' );
	require_once( 'Facebook/FacebookRedirectLoginHelper.php' );
	require_once( 'Facebook/FacebookRequest.php' );
	require_once( 'Facebook/FacebookResponse.php' );
	require_once( 'Facebook/FacebookSDKException.php' );
	require_once( 'Facebook/FacebookRequestException.php' );
	require_once( 'Facebook/FacebookOtherException.php' );
	require_once( 'Facebook/FacebookAuthorizationException.php' );
	require_once( 'Facebook/GraphObject.php' );
	require_once( 'Facebook/GraphUser.php' );
	require_once( 'Facebook/GraphSessionInfo.php' );
	require_once( 'Facebook/Entities/AccessToken.php' );

	// added in v4.0.5
	use Facebook\HttpClients\FacebookHttpable;
	use Facebook\HttpClients\FacebookCurl;
	use Facebook\HttpClients\FacebookCurlHttpClient;

	// added in v4.0.0
	use Facebook\FacebookSession;
	use Facebook\FacebookRedirectLoginHelper;
	use Facebook\FacebookRequest;
	use Facebook\FacebookResponse;
	use Facebook\FacebookSDKException;
	use Facebook\FacebookRequestException;
	use Facebook\FacebookOtherException;
	use Facebook\FacebookAuthorizationException;
	use Facebook\GraphObject;
	use Facebook\GraphUser;
	use Facebook\GraphSessionInfo;
	use Facebook\Entities\AccessToken;

    $app_id = '496761540436805';
	$app_secret = 'f5a4fef7e73a9ffb77f20a2692d50ec3';
 
	FacebookSession::setDefaultApplication($app_id, $app_secret);