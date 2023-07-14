import dotenv from 'dotenv';
import { type } from 'os';
dotenv.config();

// SERVER_PORT가 존재
console.log('serverPort:', process.env.SERVER_PORT, ', typeof: ', typeof process.env.SERVER_PORT);
printNumber(parseInt(process.env.SERVER_PORT as string, 10) || 5000);

// GRPC_SERVER_PORT가 존재하지 않음
console.log('grpcServerPort:', process.env.GRPC_SERVER_PORT, ', typeof:', typeof process.env.GRPC_SERVER_PORT);
printString(process.env.GRPC_SERVER_PORT || '5001');

function printNumber(arg: number) {
	console.log('number:', arg);
}

function printString(arg: string) {
	console.log('string:', arg)
}

var mn_a1_today_cth_share_enabled = process.env.MN_A1_TODAY_CTH_SHARE_ENABLED || false;
console.log('MN_A1_TODAY_CTH_SHARE_ENABLED:', mn_a1_today_cth_share_enabled, ', typeof:', typeof mn_a1_today_cth_share_enabled);

var enabled = Boolean(process.env.MN_A1_TODAY_CTH_SHARE_ENABLED || false);
console.log('enabled:', enabled, ', typeof:', typeof enabled);