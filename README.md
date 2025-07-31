# バクハ 💥 - ストレス解消アプリ

ストレスの原因を入力して爆破！簡単で楽しいストレス解消アプリです。
音響効果と視覚効果でスッキリ感を体験できます。

## 🌟 特徴

- **シンプルな操作**: ストレスの原因を入力するだけ
- **迫力の爆破エフェクト**: パーティクル効果と光のビーム
- **リアルな音響効果**: 爆破音でよりリアルな体験
- **SNSシェア機能**: Twitter、Facebook、LINE等でシェア可能
- **レスポンシブデザイン**: PC・スマホ対応
- **プライバシー重視**: 入力内容は保存されません

## 🚀 技術スタック

- **Framework**: Next.js 15
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Particles**: React Particles + tsparticles-slim
- **Icons**: React Share

## 🏗️ インストールと実行

### 開発環境での実行

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリを確認できます。

### ビルドとデプロイ

```bash
# プロダクションビルド
npm run build

# 静的ファイルの生成
npm run start
```

## 📁 プロジェクト構造

```
bakuha/
├── src/
│   └── app/
│       ├── layout.js          # レイアウトとメタデータ
│       ├── page.js            # メインページ
│       ├── result/
│       │   └── page.js        # 結果ページ
│       └── globals.css        # グローバルスタイル
├── public/
│   ├── bakuha.mp3            # 爆破音声ファイル
│   ├── sitemap.xml           # サイトマップ
│   ├── robots.txt            # クローラー設定
│   └── *.svg                 # アイコンファイル
├── package.json
└── next.config.mjs           # Next.js設定
```

## 🎯 SEO対策

✅ 完全なSEO対策済み：

- **メタタグ最適化**: タイトル、description、keywords
- **OGP対応**: Facebook、Twitter等でのシェア時の表示最適化
- **構造化データ**: JSON-LD形式でWebApplicationスキーマを実装
- **サイトマップ**: `sitemap.xml`で検索エンジン対応
- **robots.txt**: クローラー制御
- **パフォーマンス最適化**: 圧縮、CSS最適化

## 🔧 カスタマイズ

### 音声ファイルの変更
`public/bakuha.mp3` を置き換えることで爆破音をカスタマイズできます。

### エフェクトの調整
`src/app/result/page.js` の `explosionOptions` でパーティクル設定を変更できます。

### メタデータの更新
`src/app/layout.js` でSEO情報を編集できます。

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 コントリビューション

プルリクエストやイシューの報告を歓迎します！

---

**バクハでストレスを爆破して、スッキリした毎日を送りましょう！** 💥✨
