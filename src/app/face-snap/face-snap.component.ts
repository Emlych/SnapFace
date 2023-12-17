import { Component, Input } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { CommonModule } from "@angular/common";
import { FaceSnapsService } from "../services/face-snaps.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-face-snap",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./face-snap.component.html",
	styleUrl: "./face-snap.component.scss",
})
export class FaceSnapComponent {
	@Input() faceSnap!: FaceSnap;
	buttonText!: string;

	constructor(private faceSnapsService: FaceSnapsService, private router: Router) {}

	ngOnInit() {
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

	onViewFaceSnap() {
		this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
	}
}
