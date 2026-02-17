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
    [ "Quick Start", "index.html#autotoc_md69", [
      [ "docker", "index.html#autotoc_md70", [
        [ "clone", "index.html#autotoc_md71", null ],
        [ "dockerビルド環境のビルド", "index.html#autotoc_md72", null ],
        [ "STM32用プロジェクトビルド", "index.html#autotoc_md73", null ],
        [ "書き込み", "index.html#autotoc_md74", null ]
      ] ],
      [ "Debug", "index.html#autotoc_md75", null ],
      [ "CubeIDE", "index.html#autotoc_md76", [
        [ "1. プロジェクトのクローンとセットアップ", "index.html#autotoc_md77", null ],
        [ "2. STM32CubeIDE でプロジェクト作成", "index.html#autotoc_md78", null ],
        [ "3. コードの移動と設定", "index.html#autotoc_md79", null ],
        [ "4. コード生成とビルド", "index.html#autotoc_md80", null ],
        [ "5. STM32 への書き込み", "index.html#autotoc_md81", null ]
      ] ]
    ] ],
    [ "STM32 との通信", "index.html#autotoc_md82", null ],
    [ "TEST", "index.html#autotoc_md83", null ],
    [ "Folder Structure", "index.html#autotoc_md84", [
      [ "lib一覧", "index.html#autotoc_md85", null ],
      [ "module一覧", "index.html#autotoc_md86", null ]
    ] ],
    [ "Document Structure", "index.html#autotoc_md87", null ],
    [ "Usage Guide", "index.html#autotoc_md88", [
      [ "Include Path", "index.html#autotoc_md89", null ],
      [ "Clog (ロギングシステム)", "index.html#autotoc_md90", [
        [ "基本的な使い方", "index.html#autotoc_md91", null ],
        [ "ロギングマクロ", "index.html#autotoc_md92", null ],
        [ "色付きログ", "index.html#autotoc_md93", null ]
      ] ],
      [ "STREAM (split screen)", "index.html#autotoc_md94", [
        [ "セットアップ", "index.html#autotoc_md95", null ],
        [ "データ出力", "index.html#autotoc_md96", null ],
        [ "重要な注意点", "index.html#autotoc_md97", null ]
      ] ]
    ] ],
    [ "Architecture", "index.html#autotoc_md98", [
      [ "設計思想", "index.html#autotoc_md99", [
        [ "フォルダ構造とレイヤーの対応", "index.html#autotoc_md100", null ],
        [ "レイヤー詳細", "index.html#autotoc_md101", null ]
      ] ],
      [ "モジュール開発", "index.html#autotoc_md102", [
        [ "用語の定義", "index.html#autotoc_md103", null ],
        [ "新規モジュール追加", "index.html#autotoc_md104", null ]
      ] ]
    ] ],
    [ "Best Practices / Guidelines", "index.html#autotoc_md105", [
      [ "コーディング規約", "index.html#autotoc_md106", null ],
      [ "ライブラリ実装方針", "index.html#autotoc_md107", null ],
      [ "エラー処理", "index.html#autotoc_md108", null ],
      [ "メモリ管理", "index.html#autotoc_md109", [
        [ "F0 マイコンの制限", "index.html#autotoc_md110", null ]
      ] ],
      [ "パフォーマンス", "index.html#autotoc_md111", null ]
    ] ],
    [ "詳細実装", "index.html#autotoc_md112", null ],
    [ "CLOG", "md_app_document_manual_clog.html", [
      [ "使い方", "md_app_document_manual_clog.html#autotoc_md1", null ]
    ] ],
    [ "main", "md_app_document_manual_dev_manual.html", [
      [ "folder 構造　アーキテクチャ", "md_app_document_manual_dev_manual.html#autotoc_md3", null ],
      [ "Clog", "md_app_document_manual_dev_manual.html#autotoc_md4", [
        [ "マクロ API:", "md_app_document_manual_dev_manual.html#autotoc_md5", [
          [ "logging", "md_app_document_manual_dev_manual.html#autotoc_md6", null ],
          [ "STREAM", "md_app_document_manual_dev_manual.html#autotoc_md7", null ]
        ] ]
      ] ],
      [ "色", "md_app_document_manual_dev_manual.html#autotoc_md8", null ],
      [ "　使用方法", "md_app_document_manual_dev_manual.html#autotoc_md9", null ],
      [ "CanSystem", "md_app_document_manual_dev_manual.html#autotoc_md10", [
        [ "構造", "md_app_document_manual_dev_manual.html#autotoc_md11", null ],
        [ "使用", "md_app_document_manual_dev_manual.html#autotoc_md12", null ]
      ] ],
      [ "STREAM", "md_app_document_manual_dev_manual.html#autotoc_md13", null ]
    ] ],
    [ "CAN Profile 命名規則", "md_app_modules_CanSystem_profile_README.html", [
      [ "Features", "md_app_modules_CanSystem_profile_README.html#autotoc_md15", null ],
      [ "命名方針", "md_app_modules_CanSystem_profile_README.html#autotoc_md16", null ]
    ] ],
    [ "ProtoCAN", "md_app_modules_ProtoCAN_README.html", [
      [ "設計思想と概念", "md_app_modules_ProtoCAN_README.html#autotoc_md28", null ],
      [ "Quick Start", "md_app_modules_ProtoCAN_README.html#autotoc_md29", null ],
      [ "新規デバイス登録手順", "md_app_modules_ProtoCAN_README.html#autotoc_md30", null ],
      [ "詳細設計", "md_app_modules_ProtoCAN_README.html#autotoc_md31", [
        [ "レイヤー構造と責務", "md_app_modules_ProtoCAN_README.html#autotoc_md32", null ],
        [ "フォルダ構造", "md_app_modules_ProtoCAN_README.html#autotoc_md33", null ],
        [ "アーキテクチャ", "md_app_modules_ProtoCAN_README.html#autotoc_md34", null ]
      ] ],
      [ "CANプロトコル概要", "md_app_modules_ProtoCAN_README.html#autotoc_md35", [
        [ "1. 概要", "md_app_modules_ProtoCAN_README.html#autotoc_md36", null ],
        [ "2. CAN拡張ID構成(29bit)", "md_app_modules_ProtoCAN_README.html#autotoc_md37", [
          [ "DeviceID定義", "md_app_modules_ProtoCAN_README.html#autotoc_md38", null ],
          [ "フィールド詳細", "md_app_modules_ProtoCAN_README.html#autotoc_md39", null ]
        ] ],
        [ "3. メッセージ種類", "md_app_modules_ProtoCAN_README.html#autotoc_md40", null ],
        [ "4. プロトコル動作", "md_app_modules_ProtoCAN_README.html#autotoc_md41", [
          [ "フレーム構造", "md_app_modules_ProtoCAN_README.html#autotoc_md42", null ],
          [ "フレーム分割", "md_app_modules_ProtoCAN_README.html#autotoc_md43", null ],
          [ "欠損検出", "md_app_modules_ProtoCAN_README.html#autotoc_md44", null ],
          [ "特徴", "md_app_modules_ProtoCAN_README.html#autotoc_md45", null ]
        ] ]
      ] ]
    ] ],
    [ "Protocol", "md_app_modules_protocol_README.html", [
      [ "ディレクトリ構造", "md_app_modules_protocol_README.html#autotoc_md47", null ]
    ] ],
    [ "TEST", "md_app_test_README.html", [
      [ "依存", "md_app_test_README.html#autotoc_md49", [
        [ "実行コマンド", "md_app_test_README.html#autotoc_md50", [
          [ "コンパイル", "md_app_test_README.html#autotoc_md51", null ],
          [ "clean", "md_app_test_README.html#autotoc_md52", null ],
          [ "コマンドオプション", "md_app_test_README.html#autotoc_md53", null ]
        ] ],
        [ "ディレクトリ構造", "md_app_test_README.html#autotoc_md54", null ],
        [ "テストの書き方", "md_app_test_README.html#autotoc_md55", [
          [ "基本的なテストケース", "md_app_test_README.html#autotoc_md56", null ],
          [ "セクションを使った構造化", "md_app_test_README.html#autotoc_md57", null ],
          [ "テストフィクスチャ", "md_app_test_README.html#autotoc_md58", null ],
          [ "パラメータ化テスト", "md_app_test_README.html#autotoc_md59", null ]
        ] ],
        [ "ビルドシステム", "md_app_test_README.html#autotoc_md60", [
          [ "Makefileの主要機能", "md_app_test_README.html#autotoc_md61", null ],
          [ "インクルードパスの設定", "md_app_test_README.html#autotoc_md62", null ],
          [ "新しいテストの追加", "md_app_test_README.html#autotoc_md63", null ],
          [ "ビルドのカスタマイズ", "md_app_test_README.html#autotoc_md64", null ]
        ] ],
        [ "トラブルシューティング", "md_app_test_README.html#autotoc_md65", [
          [ "ビルドエラー", "md_app_test_README.html#autotoc_md66", null ]
        ] ],
        [ "参考リンク", "md_app_test_README.html#autotoc_md67", null ]
      ] ]
    ] ],
    [ "todo一覧", "todo.html", null ],
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
        [ "変数", "globals_vars.html", null ],
        [ "型定義", "globals_type.html", null ],
        [ "列挙型", "globals_enum.html", null ],
        [ "列挙値", "globals_eval.html", null ],
        [ "マクロ定義", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"Callbacks_8h.html",
"classIM920sL_1_1Receiver.html#a04d3a0591f54ecf2df35df46d42acf08",
"classdevices_1_1RequestStatus.html#a5882fe66a6111b2cd358d64ac807d51e",
"classdevices_1_1robomas_1_1MotorCommand.html#a1043fb0dd652e25f34d454598ddbf4df",
"classdevices_1_1robomas_1_1RobomasData.html#a1feac9ecb056d94f8eac8b9eadad50eb",
"classdevices_1_1robomas_1_1TrajectoryProfile.html#afbd3cfb0052d609ed4f8838be5455226aae78f776ba7fb088b66b27769217e7b9",
"classrobot_1_1Controller.html#a5a660df67b6b48a2698e8510d647529fa08cd1a31f17f0247ac89e2fbaadaa9e8",
"classrobot_1_1Controller.html#adf435d804ddddaae35c30547efe78e98",
"classrobot_1_1RobotCommand.html#a4ebe38427c69578deadc7c077fc94e02",
"classrobot_1_1xyz__f.html#a7b822fa585d3080d116c8624d1dcf75a",
"globals_eval.html",
"proto__uart_8hpp.html",
"structproto__can_1_1RawMessage.html"
];

var SYNCONMSG = 'クリックで同期表示が無効になります';
var SYNCOFFMSG = 'クリックで同期表示が有効になります';