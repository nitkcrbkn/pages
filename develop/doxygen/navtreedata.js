/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "STM32System", "index.html", [
    [ "Quick Start", "index.html#autotoc_md36", [
      [ "全体構造の概要", "index.html#autotoc_md37", null ],
      [ "ソフトのインストール", "index.html#autotoc_md38", [
        [ "CubeMX", "index.html#autotoc_md39", null ],
        [ "シリアルモニタ", "index.html#autotoc_md40", null ],
        [ "docker", "index.html#autotoc_md41", null ]
      ] ],
      [ "使用方法", "index.html#autotoc_md42", null ],
      [ "clone", "index.html#autotoc_md43", null ],
      [ "dockerビルド環境のビルド", "index.html#autotoc_md44", null ],
      [ "HALを生成する", "index.html#autotoc_md45", null ],
      [ "ビルドして書き込み", "index.html#autotoc_md46", [
        [ "コマンドとオプション", "index.html#autotoc_md47", null ],
        [ "clogスケッチのNucleoG474REへの書き込み", "index.html#autotoc_md48", null ],
        [ "その他スケッチの書き込み", "index.html#autotoc_md49", null ],
        [ "よくあるトラブルシューティング", "index.html#autotoc_md50", null ]
      ] ]
    ] ],
    [ "スケッチ新規作成", "index.html#autotoc_md51", [
      [ "appMain.cpp", "index.html#autotoc_md52", null ],
      [ "config.h", "index.html#autotoc_md53", null ],
      [ "callbacks.h", "index.html#autotoc_md54", null ]
    ] ],
    [ "新規repo作成", "index.html#autotoc_md55", [
      [ "git", "index.html#autotoc_md56", null ],
      [ "CubeMX", "index.html#autotoc_md57", [
        [ "手順", "index.html#autotoc_md58", null ]
      ] ],
      [ "cmake", "index.html#autotoc_md59", null ],
      [ "target handler", "index.html#autotoc_md60", null ],
      [ "quick start", "index.html#autotoc_md61", null ]
    ] ],
    [ "STM32 との通信", "index.html#autotoc_md62", null ],
    [ "TEST", "index.html#autotoc_md63", [
      [ "ビルドテスト", "index.html#autotoc_md64", null ]
    ] ],
    [ "Folder Structure", "index.html#autotoc_md65", [
      [ "lib一覧", "index.html#autotoc_md66", null ],
      [ "module一覧", "index.html#autotoc_md67", null ]
    ] ],
    [ "Document Structure", "index.html#autotoc_md68", [
      [ "既存Documents", "index.html#autotoc_md69", null ]
    ] ],
    [ "Usage Guide", "index.html#autotoc_md70", [
      [ "Include Path", "index.html#autotoc_md71", null ],
      [ "Clog (ロギングシステム)", "index.html#autotoc_md72", [
        [ "重要な注意点", "index.html#autotoc_md73", null ]
      ] ]
    ] ],
    [ "Architecture", "index.html#autotoc_md74", [
      [ "設計思想", "index.html#autotoc_md75", [
        [ "フォルダ構造とレイヤーの対応", "index.html#autotoc_md76", null ],
        [ "レイヤー詳細", "index.html#autotoc_md77", null ]
      ] ],
      [ "モジュール開発", "index.html#autotoc_md78", [
        [ "用語の定義", "index.html#autotoc_md79", null ],
        [ "新規モジュール追加", "index.html#autotoc_md80", null ]
      ] ]
    ] ],
    [ "Best Practices / Guidelines", "index.html#autotoc_md81", [
      [ "コーディング規約", "index.html#autotoc_md82", null ],
      [ "ライブラリ実装方針", "index.html#autotoc_md83", null ],
      [ "エラー処理", "index.html#autotoc_md84", null ],
      [ "メモリ管理", "index.html#autotoc_md85", [
        [ "F0 マイコンの制限", "index.html#autotoc_md86", null ]
      ] ],
      [ "パフォーマンス", "index.html#autotoc_md87", null ]
    ] ],
    [ "詳細実装", "index.html#autotoc_md88", null ],
    [ "CAN Profile 命名規則", "d3/d50/md_modules_CanSystem_profile_README.html", [
      [ "Features", "d3/d50/md_modules_CanSystem_profile_README.html#autotoc_md1", null ],
      [ "命名方針", "d3/d50/md_modules_CanSystem_profile_README.html#autotoc_md2", null ]
    ] ],
    [ "CANbus", "d8/d9b/md_modules_ProtoCAN_protocol.html", [
      [ "システム構成図", "d8/d9b/md_modules_ProtoCAN_protocol.html#autotoc_md9", [
        [ "CANbus ノード構成", "d8/d9b/md_modules_ProtoCAN_protocol.html#autotoc_md10", null ],
        [ "ソフトウェアレイヤ構成（右側）", "d8/d9b/md_modules_ProtoCAN_protocol.html#autotoc_md11", null ]
      ] ],
      [ "コードスニペット", "d8/d9b/md_modules_ProtoCAN_protocol.html#autotoc_md12", null ],
      [ "PC <-> G4 やること", "d8/d9b/md_modules_ProtoCAN_protocol.html#autotoc_md14", null ]
    ] ],
    [ "ProtoCAN", "d1/dd8/md_modules_ProtoCAN_README.html", [
      [ "設計思想と概念", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md16", null ],
      [ "Quick Start", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md17", [
        [ "実行方法", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md18", null ]
      ] ],
      [ "新規デバイス登録手順", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md19", null ],
      [ "詳細設計", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md20", [
        [ "レイヤー構造と責務", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md21", null ],
        [ "フォルダ構造", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md22", null ],
        [ "アーキテクチャ", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md23", null ]
      ] ],
      [ "CANプロトコル概要", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md24", [
        [ "1. 概要", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md25", null ],
        [ "2. CAN拡張ID構成(29bit)", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md26", [
          [ "DeviceID定義", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md27", null ],
          [ "フィールド詳細", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md28", null ]
        ] ],
        [ "3. メッセージ種類", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md29", null ],
        [ "4. プロトコル動作", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md30", [
          [ "フレーム構造", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md31", null ],
          [ "フレーム分割", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md32", null ],
          [ "欠損検出", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md33", null ],
          [ "特徴", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md34", null ]
        ] ]
      ] ]
    ] ],
    [ "todo一覧", "dd/da0/todo.html", null ],
    [ "名前空間", "namespaces.html", [
      [ "名前空間一覧", "namespaces.html", "namespaces_dup" ],
      [ "名前空間メンバ", "namespacemembers.html", [
        [ "全て", "namespacemembers.html", null ],
        [ "関数", "namespacemembers_func.html", null ],
        [ "変数", "namespacemembers_vars.html", null ],
        [ "型定義", "namespacemembers_type.html", null ],
        [ "列挙型", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "クラス", "annotated.html", [
      [ "クラス一覧", "annotated.html", "annotated_dup" ],
      [ "クラス索引", "classes.html", null ],
      [ "クラス階層", "hierarchy.html", "hierarchy" ],
      [ "クラスメンバ", "functions.html", [
        [ "全て", "functions.html", "functions_dup" ],
        [ "関数", "functions_func.html", "functions_func" ],
        [ "変数", "functions_vars.html", null ],
        [ "型定義", "functions_type.html", null ],
        [ "列挙型", "functions_enum.html", null ]
      ] ]
    ] ],
    [ "ファイル", "files.html", [
      [ "ファイル一覧", "files.html", "files_dup" ],
      [ "ファイルメンバ", "globals.html", [
        [ "全て", "globals.html", null ],
        [ "関数", "globals_func.html", null ],
        [ "型定義", "globals_type.html", null ],
        [ "列挙型", "globals_enum.html", null ],
        [ "マクロ定義", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"d2/deb/classproto__can_1_1Device.html#adf375452e0ee82ed42058bbb08bbe2ba",
"d6/de5/structPS5_1_1Button.html#ac022c824cb599ccd9f33df4221dc4115",
"d9/d76/classCanSystem_1_1MockCanProfile.html#a9b3d173dad0b129663a8b99ca8b77d33",
"dd/d1a/classUartManager.html",
"functions_h.html"
];

var SYNCONMSG = 'クリックで同期表示が無効になります';
var SYNCOFFMSG = 'クリックで同期表示が有効になります';