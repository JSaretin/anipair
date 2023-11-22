import type { AniInfo } from '$lib/structure';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export async function load({ params }) {
	const data = await pb.collection('pets').getOne(params.pet_id);
	return data;
}
