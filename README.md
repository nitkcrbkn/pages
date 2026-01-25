# 木更津高専ロボット研究同好会 CI/CD Reports

https://nitkcrbkn.github.io/pages/#/

各種プロジェクトにおける、CI/CDパイプラインで自動生成されたレポート類を公開するサイトです。  
テストカバー、Doxygenのドキュメント、APIドキュメント等が含まれます。

[_config.yaml](_config.yml)にpagesのtheme設定が、そして[index.md](index.md)にindex pageが書かれている。  
使用themeは[jekyll/minima](https://github.com/jekyll/minima)  
[_includes/footer.html](_includes/footer.html) を空で追加することでfooterを消した。
githubは`.nojekyll`がないときは自動でビルドを[_config.yaml](_config.yml)に従いおこなう。

## Quick Start Local

### Rubyインストール
```bash
sudo apt-get install ruby-full build-essential zlib1g-dev 
```

### 環境変数を設定

環境変数を設定:
```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### JekyllとBundlerをインストール

Jekyllは静的サイトジェネレーター、Bundlerは依存関係管理ツールです:
```bash
gem install jekyll bundler
```

### 依存パッケージをインストール・更新

初回セットアップ時:
```bash
bundle install
```

依存パッケージを更新する場合:
```bash
bundle update
```

### 開発サーバーを起動

ホットリロードでサイトをホスト。ブラウザで [http://127.0.0.1:4000](http://127.0.0.1:4000):
```bash
bundle exec jekyll serve --watch
```
