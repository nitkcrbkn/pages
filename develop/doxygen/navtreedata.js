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
    [ "Quick Start", "index.html#autotoc_md50", [
      [ "全体構造の概要", "index.html#autotoc_md51", null ],
      [ "ソフトのインストール", "index.html#autotoc_md52", [
        [ "CubeMX", "index.html#autotoc_md53", null ],
        [ "シリアルモニタ", "index.html#autotoc_md54", null ],
        [ "docker", "index.html#autotoc_md55", null ]
      ] ],
      [ "使用方法", "index.html#autotoc_md56", null ],
      [ "clone", "index.html#autotoc_md57", null ],
      [ "dockerビルド環境のビルド", "index.html#autotoc_md58", null ],
      [ "HALを生成する", "index.html#autotoc_md59", null ],
      [ "ビルドして書き込み", "index.html#autotoc_md60", [
        [ "コマンドとオプション", "index.html#autotoc_md61", null ],
        [ "clogスケッチのNucleoG474REへの書き込み", "index.html#autotoc_md62", null ],
        [ "その他スケッチの書き込み", "index.html#autotoc_md63", null ],
        [ "よくあるトラブルシューティング", "index.html#autotoc_md64", null ]
      ] ]
    ] ],
    [ "スケッチ新規作成", "index.html#autotoc_md65", [
      [ "appMain.cpp", "index.html#autotoc_md66", null ],
      [ "config.h", "index.html#autotoc_md67", null ],
      [ "callbacks.h", "index.html#autotoc_md68", null ]
    ] ],
    [ "新規repo作成", "index.html#autotoc_md69", [
      [ "git", "index.html#autotoc_md70", null ],
      [ "CubeMX", "index.html#autotoc_md71", [
        [ "手順", "index.html#autotoc_md72", null ]
      ] ],
      [ "cmake", "index.html#autotoc_md73", null ],
      [ "target handler", "index.html#autotoc_md74", null ],
      [ "quick start", "index.html#autotoc_md75", null ]
    ] ],
    [ "STM32 との通信", "index.html#autotoc_md76", null ],
    [ "TEST", "index.html#autotoc_md77", [
      [ "ビルドテスト", "index.html#autotoc_md78", null ]
    ] ],
    [ "Folder Structure", "index.html#autotoc_md79", [
      [ "lib一覧", "index.html#autotoc_md80", null ],
      [ "module一覧", "index.html#autotoc_md81", null ]
    ] ],
    [ "Document Structure", "index.html#autotoc_md82", [
      [ "既存Documents", "index.html#autotoc_md83", null ]
    ] ],
    [ "Usage Guide", "index.html#autotoc_md84", [
      [ "Include Path", "index.html#autotoc_md85", null ],
      [ "Clog (ロギングシステム)", "index.html#autotoc_md86", [
        [ "重要な注意点", "index.html#autotoc_md87", null ]
      ] ]
    ] ],
    [ "Architecture", "index.html#autotoc_md88", [
      [ "設計思想", "index.html#autotoc_md89", [
        [ "フォルダ構造とレイヤーの対応", "index.html#autotoc_md90", null ],
        [ "レイヤー詳細", "index.html#autotoc_md91", null ]
      ] ],
      [ "モジュール開発", "index.html#autotoc_md92", [
        [ "用語の定義", "index.html#autotoc_md93", null ],
        [ "新規モジュール追加", "index.html#autotoc_md94", null ]
      ] ]
    ] ],
    [ "Best Practices / Guidelines", "index.html#autotoc_md95", [
      [ "コーディング規約", "index.html#autotoc_md96", null ],
      [ "ライブラリ実装方針", "index.html#autotoc_md97", null ],
      [ "エラー処理", "index.html#autotoc_md98", null ],
      [ "メモリ管理", "index.html#autotoc_md99", [
        [ "F0 マイコンの制限", "index.html#autotoc_md100", null ]
      ] ],
      [ "パフォーマンス", "index.html#autotoc_md101", null ]
    ] ],
    [ "詳細実装", "index.html#autotoc_md102", null ],
    [ "CAN Profile 命名規則", "d3/d50/md_modules_CanSystem_profile_README.html", [
      [ "Features", "d3/d50/md_modules_CanSystem_profile_README.html#autotoc_md1", null ],
      [ "命名方針", "d3/d50/md_modules_CanSystem_profile_README.html#autotoc_md2", null ]
    ] ],
    [ "CanSystem", "df/df4/md_modules_CanSystem_README.html", [
      [ "設計思想と概念", "df/df4/md_modules_CanSystem_README.html#autotoc_md4", null ],
      [ "Quick Start", "df/df4/md_modules_CanSystem_README.html#autotoc_md5", [
        [ "プロファイル選択", "df/df4/md_modules_CanSystem_README.html#autotoc_md6", null ],
        [ "使い方", "df/df4/md_modules_CanSystem_README.html#autotoc_md7", null ]
      ] ],
      [ "詳細設計", "df/df4/md_modules_CanSystem_README.html#autotoc_md8", [
        [ "レイヤー構造と責務", "df/df4/md_modules_CanSystem_README.html#autotoc_md9", null ],
        [ "アーキテクチャ", "df/df4/md_modules_CanSystem_README.html#autotoc_md10", null ],
        [ "受信フロー", "df/df4/md_modules_CanSystem_README.html#autotoc_md11", null ]
      ] ],
      [ "テスト (MockCanProfile)", "df/df4/md_modules_CanSystem_README.html#autotoc_md12", null ]
    ] ],
    [ "lite", "d7/d2b/md_modules_lite_README.html", [
      [ "設計思想と概念", "d7/d2b/md_modules_lite_README.html#autotoc_md14", [
        [ "共通原則: ヒープ不使用", "d7/d2b/md_modules_lite_README.html#autotoc_md15", null ]
      ] ],
      [ "lite logger", "d7/d2b/md_modules_lite_README.html#autotoc_md16", null ]
    ] ],
    [ "CANbus", "d8/d9b/md_modules_ProtoCAN_protocol.html", [
      [ "システム構成図", "d8/d9b/md_modules_ProtoCAN_protocol.html#autotoc_md23", [
        [ "CANbus ノード構成", "d8/d9b/md_modules_ProtoCAN_protocol.html#autotoc_md24", null ],
        [ "ソフトウェアレイヤ構成（右側）", "d8/d9b/md_modules_ProtoCAN_protocol.html#autotoc_md25", null ]
      ] ],
      [ "コードスニペット", "d8/d9b/md_modules_ProtoCAN_protocol.html#autotoc_md26", null ],
      [ "PC <-> G4 やること", "d8/d9b/md_modules_ProtoCAN_protocol.html#autotoc_md28", null ]
    ] ],
    [ "ProtoCAN", "d1/dd8/md_modules_ProtoCAN_README.html", [
      [ "設計思想と概念", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md30", null ],
      [ "Quick Start", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md31", [
        [ "実行方法", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md32", null ]
      ] ],
      [ "新規デバイス登録手順", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md33", null ],
      [ "詳細設計", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md34", [
        [ "レイヤー構造と責務", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md35", null ],
        [ "フォルダ構造", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md36", null ],
        [ "アーキテクチャ", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md37", null ]
      ] ],
      [ "CANプロトコル概要", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md38", [
        [ "1. 概要", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md39", null ],
        [ "2. CAN拡張ID構成(29bit)", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md40", [
          [ "DeviceID定義", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md41", null ],
          [ "フィールド詳細", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md42", null ]
        ] ],
        [ "3. メッセージ種類", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md43", null ],
        [ "4. プロトコル動作", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md44", [
          [ "フレーム構造", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md45", null ],
          [ "フレーム分割", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md46", null ],
          [ "欠損検出", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md47", null ],
          [ "特徴", "d1/dd8/md_modules_ProtoCAN_README.html#autotoc_md48", null ]
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
        [ "列挙型", "functions_enum.html", null ],
        [ "関連関数", "functions_rela.html", null ]
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
"d2/deb/classproto__can_1_1Device.html",
"d6/de5/structPS5_1_1Button.html#a8c44b2ac37e7463bc1a34ba993e89a95",
"d8/dd9/classproto__can_1_1Messenger.html#a93a9ec79a718432ac0c0246673def142",
"dc/d65/namespaceproto__can.html",
"df/d6b/structCanSystem_1_1ErrorCounters.html#aef2180499634b5cbb2d3a0e33f3e055a"
];

var SYNCONMSG = 'クリックで同期表示が無効になります';
var SYNCOFFMSG = 'クリックで同期表示が有効になります';