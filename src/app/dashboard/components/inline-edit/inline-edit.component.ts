import {
  Component,
  Input,
  ViewChild,
  Renderer,
  OnInit, ChangeDetectionStrategy
} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {Post} from "../../../post";
import {Observable} from "rxjs";


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.css']
})
export class InlineEditComponent implements ControlValueAccessor, OnInit {

  @ViewChild('inlineEditControl') inlineEditControl;
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() preValue: string = '';
  @Input() _value: string = '';
  editing: boolean = false;
  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;
  private renderer: Renderer;

  constructor() {
  }

  ngOnInit() {
  }

  get value(): any {
    return this._value;
  }

  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  writeValue(value: any) {
    this._value = value;
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
  onBlur() {
    this.editing = false;
  }
  edit(value) {
    if (this.disabled) {
      return;
    }
    this.preValue = value;
    this.editing = true;
    // Focus on the input element just as the editing begins
    setTimeout(_ => this.renderer.invokeElementMethod(this.inlineEditControl,
      'focus', []));
  }
}
