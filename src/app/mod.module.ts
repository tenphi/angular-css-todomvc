import {NgModule, Directive, Renderer2, Input, ElementRef} from '@angular/core';

function generateClass(modName?: string) {
  return '-' + modName;
}

function parseMods(mods: string | string[] | object) {
  if (typeof mods === 'string') {
    mods = mods.split(/\s+/);
  }

  if (Array.isArray(mods)) {
    let arr = mods;

    mods = {};

    arr.forEach(key => {
      mods[key] = true;
    });
  } else if (typeof mods !== 'object') {
    return {};
  }

  return mods;
}

function setMods(blockName: string, elemName: string, mods: object, oldMods: object, element: ElementRef, renderer: Renderer2) {
  Object.keys(mods).forEach(key => {
    if (oldMods[key]) {
      if (mods[key] === oldMods[key]) {
        return;
      }

      renderer.removeClass(element.nativeElement, generateClass(key));
    }

    if (mods[key]) {
      renderer.addClass(element.nativeElement, generateClass(key));
    }
  });

  Object.keys(oldMods).forEach(key => {
    if (!(key in mods) && oldMods[key]) {
      renderer.removeClass(element.nativeElement, generateClass(key));
    }
  });
}

@Directive({
  selector: '[mod]',
})
export class ModDirective {
  public element: ElementRef;
  public renderer: Renderer2;
  @Input() public mod: string | string[] | object;
  private _mods: Object;
  private _modSerialized: string;

  constructor(element: ElementRef,
              renderer: Renderer2) {

    this.element = element;
    this.renderer = renderer;

    this.applyMods();
  }

  ngOnChanges() {
    this.applyMods();
  }

  applyMods() {
    if (JSON.stringify(this.mod) !== this._modSerialized) {
      this._modSerialized = JSON.stringify(this.mod);

      let mods = this.mod;

      let {renderer, element} = this;

      mods = parseMods(mods);

      setMods(name, '', mods, this._mods || {}, element, renderer);

      this._mods = this._mods === mods ? Object.assign({}, mods) : mods;
    }
  }
}

@NgModule({
  declarations: [
    ModDirective,
  ],
  exports: [
    ModDirective,
  ]
})
export class ModModule {
}
