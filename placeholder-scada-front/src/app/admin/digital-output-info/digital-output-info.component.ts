import { Component, Input } from '@angular/core';
import { DigitalOutput } from 'src/app/dto/OutputDTOs';

@Component({
  selector: 'app-digital-output-info',
  templateUrl: './digital-output-info.component.html',
  styleUrls: ['./digital-output-info.component.css']
})
export class DigitalOutputInfoComponent {
    
    @Input() set Item(item: DigitalOutput) {
        this.input = item
    }
    
    input: DigitalOutput = {
        id: 0,
        description: "Not Temperatura",
        address: 1,
        initialValue: 0
    }
}
