import { env } from '$env/dynamic/public';
import type { AniInfo } from '$lib/structure';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://db.anipair.com');


export async function load() {
    const aniInfors = await pb.collection('pets').getFullList({
        sort: '-created',
    })
	const data: AniInfo[] = [
        {
            id: "1",
            title: "The Adventure Begins",
            description: "Embark on a thrilling journey filled with excitement and challenges.",
            images: [
                { url: "https://source.unsplash.com/random/300x300?cat", preview: true },
                { url: "https://source.unsplash.com/random/300x400?cat", preview: false }
            ]
        },
        {
            id: "2",
            title: "Mystic Kingdom",
            description: "Explore the enchanted realms of magic and mystery in this epic tale.",
            images: [
                { url: "https://source.unsplash.com/random/400x300?dog", preview: true },
                { url: "https://source.unsplash.com/random/300x400?dog", preview: false }
            ]
        },
        {
            id: "3",
            title: "Galactic Odyssey",
            description: "Travel through the cosmos and discover new worlds beyond imagination.",
            images: [
                { url: "https://source.unsplash.com/random/300x600?dog", preview: true },
                { url: "https://source.unsplash.com/random/300x500?dog", preview: false }
            ]
        },
        {
            id: "4",
            title: "Underwater Wonders",
            description: "Dive into the depths of the ocean to uncover the secrets of aquatic marvels.",
            images: [
                { url: "https://source.unsplash.com/random/300x300?pitbull", preview: true },
                { url: "https://source.unsplash.com/random/300x300?pitbull", preview: false }
            ]
        },
        {
            id: "5",
            title: "Robo Revolution",
            description: "Witness the rise of artificial intelligence and its impact on society.",
            images: [
                { url: "https://source.unsplash.com/random/700x700?cat", preview: true },
                { url: "https://source.unsplash.com/random/300x700?cat", preview: false }
            ]
        },
    ];
	return {
		aniInfors
	};
}
