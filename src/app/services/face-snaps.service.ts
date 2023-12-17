import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
	providedIn: "root",
})
export class FaceSnapsService {
	faceSnaps: FaceSnap[] = [
		{
			id: 1,
			title: "Archibald oui c'est lui",
			description: "Mon meilleur ami oui oui ",
			createdDate: new Date(),
			imgUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
			snaps: 150,
			location: "Paris",
		},

		{
			id: 2,
			title: "Three Rock Mountain",
			description: "Un endroit magnifique pour les randonnées.",
			imgUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg",
			createdDate: new Date(),
			snaps: 60000,
			location: "la montagne",
		},
		{
			id: 3,
			title: "Un bon repas",
			description: "Mmmh que c'est bon !",
			imgUrl: "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
			createdDate: new Date(),
			snaps: 2,
		},
		{
			id: 4,
			title: "Un mauvais repas",
			description: "Mmmh que c'est mauvais !",
			imgUrl: "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
			createdDate: new Date(),
			snaps: 47,
			location: "L'endroit mauvais",
		},
	];

	getAllFaceSnaps(): FaceSnap[] {
		return this.faceSnaps;
	}

	getFaceSnapById(id: number): FaceSnap {
		const faceSnap = this.faceSnaps.find((faceSnap) => faceSnap.id === id);
		if (!faceSnap) {
			throw new Error("Facesnap not found");
		} else {
			return faceSnap;
		}
	}

	snapFaceSnapById(id: number, snapType: "snap" | "unsnap"): void {
		const faceSnap = this.getFaceSnapById(id);
		if (faceSnap) {
			snapType === "snap" ? faceSnap.snaps++ : faceSnap.snaps--;
		}
	}
}
