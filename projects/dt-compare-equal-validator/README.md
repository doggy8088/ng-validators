# DtCompareEqualValidator

這個套件主要可以提供 Angular 7+ 專案使用進行欄位驗證，目前提供的驗證器為 `dt-compare-equal-validator`，可以用來比對一個 FormGroup 下的兩個欄位內容是否一致，較常見的使用情境是用在註冊會員時「設定密碼」與「確認密碼」欄位的時候。

## 安裝套件

```sh
npm install dt-compare-equal-validator
```

## Reactive Forms 使用方式

1. 匯入 `compareEqual` 函式

   ```ts
   import { compareEqual } from 'dt-compare-equal-validator';
   ```

2. 使用**同步驗證器**範例

   ```ts
   import { Component, OnInit } from '@angular/core';
   import { compareEqual } from 'dt-compare-equal-validator';
   import { FormBuilder, FormGroup, Validators } from '@angular/forms';

   @Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css']
   })
   export class AppComponent implements OnInit {
     form: FormGroup;
     constructor(private fb: FormBuilder) {}
     ngOnInit(): void {
       this.form = this.fb.group({
         pw: ['', [Validators.required]],
         pw2: ['', [Validators.required, compareEqual('pw')]]
       });
     }
   }
   ```

## Template-driven Forms 使用方式

1. 匯入 `DtCompareEqualValidatorModule` 模組到 `AppModule`

   ```ts
   import { BrowserModule } from '@angular/platform-browser';
   import { NgModule } from '@angular/core';

   import { AppRoutingModule } from './app-routing.module';
   import { AppComponent } from './app.component';

   import { DtCompareEqualValidatorModule } from 'dt-compare-equal-validator';
   import { FormsModule } from '@angular/forms';

   @NgModule({
     declarations: [AppComponent],
     imports: [
       BrowserModule,
       FormsModule,
       AppRoutingModule,
       DtCompareEqualValidatorModule
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule {}
   ```

2. 直接到 Template 中套用 `dtCompareEqual` Directive

   由於要比對兩個欄位是否相同，所以在使用 `dtCompareEqual` 的時候要記得傳入欲比對的欄位名稱 ( `name` )。例如：`dtCompareEqual="pw"`

   ```html
   <form>
     <div>
       輸入密碼:
       <input type="text" name="pw" #tPw="ngModel" [(ngModel)]="pw" required />
     </div>
     <pre>{{ tPw.errors | json }}</pre>
     <div>
       確認密碼:
       <input
         type="text"
         name="pw2"
         #tPw2="ngModel"
         [(ngModel)]="pw2"
         required
         dtCompareEqual="pw"
       />
     </div>
     <pre>{{ tPw2.errors | json }}</pre>
   </form>
   ```

## 使用範例

<https://stackblitz.com/edit/dt-compare-equal-validator-sample>

