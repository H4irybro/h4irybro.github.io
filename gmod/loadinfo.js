/*
	Called at the start, when the loading screen finishes loading all assets.

	serverName- Server's name.
		Convar: hostname
		For exmaple: "Garry's Mod Server"
	serverURL- URL for the loading screen.
		Convar: sv_loadingurl
		For example: "http://mywebsite.com/myloadingscreen.html"
	mapName- The name of the map the server is playing.
		For example: "cs_office"
	maxPlayers- Maximum number of players for the server.
		Convar: maxplayers
	steamID- 64-bit, numeric Steam community ID of the client joining.
		For example: 76561198012345678
	gamemode- The gamemode the server is currently playing.
		Convar: gamemode
		For example: "deathrun"
*/
function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode ) {
	$("#info-servername").text(servername);
	$("#info-serverurl").text(servername);
	$("#info-mapname").text("Map: " + mapname);
	$("#info-maxplayers").text("Max Players: " + maxplayers);
	$("#info-steamid").text("SteamID: " + steamid);
	$("#info-gamemode").text("GameMode: " + gamemode);
}
/*
	Called at the start

	total- Total number of files the client will have to download.
*/
function SetFilesTotal( total ) {}
/*
	Called when the client starts downloading a file.

	fileName- The full path and name of the file the client is downloading.
		This path represents the resource's location rather than the actual file's location on the server.
		For example, the file "garrysmod/addons/myAddon/materials/models/bobsModels/car.mdl" will be:
			"materials/models/bobsModels/car.mdl"
*/
function DownloadingFile( fileName ) {
	$("#info-downloading").text(filename);
}
/*
	Called when the client's joining status changes.

	status- Current joining status.
		For example: "Sending client info..."
*/
function SetStatusChanged( status ) {}
/*
	Called when the number of files remaining for the client to download changes.

	needed- Number of files left for the client to download.
*/
function SetFilesNeeded( needed ) {}