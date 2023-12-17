import { Component, Input } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { CommonModule } from "@angular/common";
import { FaceSnapsService } from "../services/face-snaps.service";
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
	selector: "app-single-face-snap",
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: "./single-face-snap.component.html",
	styleUrl: "./single-face-snap.component.scss",
})
export class SingleFaceSnapComponent {
	@Input() faceSnap!: FaceSnap;
	buttonText!: string;

	constructor(
		private faceSnapsService: FaceSnapsService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		const snapId = +this.route.snapshot.params["id"];
		this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
		this.buttonText = "Oh Snap!";
	}

	onAddSnap() {
		if (this.buttonText === "Oh Snap!") {
			this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "snap");
			this.buttonText = "Oops, un Snap!";
		} else {
			this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "unsnap");
			this.buttonText = "Oh Snap!";
		}
	}
}
