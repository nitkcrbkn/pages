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
      [ "docker", "index.html#autotoc_md37", [
        [ "clone", "index.html#autotoc_md38", null ],
        [ "dockerビルド環境のビルド", "index.html#autotoc_md39", null ],
        [ "STM32用プロジェクトビルド", "index.html#autotoc_md40", null ],
        [ "書き込み", "index.html#autotoc_md41", null ]
      ] ],
      [ "Debug", "index.html#autotoc_md42", null ],
      [ "CubeIDE", "index.html#autotoc_md43", [
        [ "1. プロジェクトのクローンとセットアップ", "index.html#autotoc_md44", null ],
        [ "2. STM32CubeIDE でプロジェクト作成", "index.html#autotoc_md45", null ],
        [ "3. コードの移動と設定", "index.html#autotoc_md46", null ],
        [ "4. コード生成とビルド", "index.html#autotoc_md47", null ],
        [ "5. STM32 への書き込み", "index.html#autotoc_md48", null ]
      ] ]
    ] ],
    [ "STM32 との通信", "index.html#autotoc_md49", null ],
    [ "TEST", "index.html#autotoc_md50", null ],
    [ "Folder Structure", "index.html#autotoc_md51", [
      [ "lib一覧", "index.html#autotoc_md52", null ],
      [ "module一覧", "index.html#autotoc_md53", null ]
    ] ],
    [ "Document Structure", "index.html#autotoc_md54", null ],
    [ "Usage Guide", "index.html#autotoc_md55", [
      [ "Include Path", "index.html#autotoc_md56", null ],
      [ "Clog (ロギングシステム)", "index.html#autotoc_md57", [
        [ "基本的な使い方", "index.html#autotoc_md58", null ],
        [ "ロギングマクロ", "index.html#autotoc_md59", null ],
        [ "色付きログ", "index.html#autotoc_md60", null ]
      ] ],
      [ "STREAM (split screen)", "index.html#autotoc_md61", [
        [ "セットアップ", "index.html#autotoc_md62", null ],
        [ "データ出力", "index.html#autotoc_md63", null ],
        [ "重要な注意点", "index.html#autotoc_md64", null ]
      ] ]
    ] ],
    [ "Architecture", "index.html#autotoc_md65", [
      [ "設計思想", "index.html#autotoc_md66", [
        [ "フォルダ構造とレイヤーの対応", "index.html#autotoc_md67", null ],
        [ "レイヤー詳細", "index.html#autotoc_md68", null ]
      ] ],
      [ "モジュール開発", "index.html#autotoc_md69", [
        [ "用語の定義", "index.html#autotoc_md70", null ],
        [ "新規モジュール追加", "index.html#autotoc_md71", null ]
      ] ]
    ] ],
    [ "Best Practices / Guidelines", "index.html#autotoc_md72", [
      [ "コーディング規約", "index.html#autotoc_md73", null ],
      [ "ライブラリ実装方針", "index.html#autotoc_md74", null ],
      [ "エラー処理", "index.html#autotoc_md75", null ],
      [ "メモリ管理", "index.html#autotoc_md76", [
        [ "F0 マイコンの制限", "index.html#autotoc_md77", null ]
      ] ],
      [ "パフォーマンス", "index.html#autotoc_md78", null ]
    ] ],
    [ "詳細実装", "index.html#autotoc_md79", null ],
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
        [ "型定義", "functions_type.html", null ]
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
"d3/d09/frame__field_8hpp.html#a294eb959cdcd1d2626a32ade4184e698a2200becb80f0019c4a2ccecec350d0db",
"d7/d93/structCanSystem_1_1CANConfig.html#a11ee035bd8d0b318bdb32d232618e9e2",
"d9/d7c/classCanSystem_1_1CanErrorTracker.html#a936315fb72908b5f0455cb0fcdfb62dc",
"df/d05/CanState_8hpp.html#a674258573a753a099d7c03574774ba26"
];

var SYNCONMSG = 'クリックで同期表示が無効になります';
var SYNCOFFMSG = 'クリックで同期表示が有効になります';