import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-block',
  standalone: true,
  imports: [],
  templateUrl: './iconBlock.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBlockComponent { 
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) title!: string;
}
