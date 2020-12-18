import {
  animate,
  animation,
  AnimationBuilder,
  AnimationMetadata,
  AnimationReferenceMetadata,
  style
} from "@angular/animations";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  private meta: AnimationMetadata[] = [
    style({ opacity: `0` }),
    animate(
      `1000ms 0s cubic-bezier(0.390, 0.575, 0.565, 1.000)`,
      style({ opacity: `1` })
    )
  ];

  public items: any[] = [];

  @ViewChild("element", { static: true })
  private element: ElementRef | undefined;

  constructor(private builder: AnimationBuilder) { }

  public animate() {
    const customAnimation: AnimationReferenceMetadata = animation(this.meta);
    const animationBuilder = this.builder.build(customAnimation);
    if (!this.element) return;
    var player = animationBuilder.create(this.element.nativeElement);
    player.onDone(() => {
      if (player) {
        player.reset();
      }
    });
    player.play();
  }

  ngOnInit() {
    this.items = [];
    for (let item = 0; item < 5000; item++) {
      this.items.push({ id: item });
    }
  }
}
