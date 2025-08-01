'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';
// React Shareのインポート
import {
  TwitterShareButton,
  FacebookShareButton,
  LineShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  XIcon,
  FacebookIcon,
  LineIcon,
  TelegramIcon,
  WhatsappIcon
} from 'react-share';

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const text = searchParams.get('text') || '';
  const [showEffects, setShowEffects] = useState(false);
  const [showBeam, setShowBeam] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [audioRef, setAudioRef] = useState(null);

  // シェア用のテキストとURL
  const shareText = `「${text}」を爆破してスッキリした！💥\n\n#ストレス解消アプリ`;
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    if (!text) {
      router.push('/');
    } else {
      setTimeout(() => setShowEffects(true), 500);
      setTimeout(() => setShowBeam(true), 1000);
      
      // Play sound
      if (soundEnabled) {
        const audio = new Audio('/bakuha.mp3');
        audio.volume = 0.7;
        audio.play().catch(err => console.log('Audio play failed:', err));
        setAudioRef(audio);
      }
    }
    
    return () => {
      if (audioRef) {
        audioRef.pause();
        audioRef.currentTime = 0;
      }
    };
  }, [text, router, soundEnabled]);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const explosionOptions = {
    particles: {
      number: {
        value: 300,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ['#ff0000', '#ff3300', '#ff6600', '#ff9900', '#ffcc00', '#ffff00', '#ffffff', '#ffa500']
      },
      shape: {
        type: ['circle', 'square', 'triangle'],
        stroke: {
          width: 0,
          color: '#000000'
        }
      },
      opacity: {
        value: 1,
        random: true,
        animation: {
          enable: true,
          speed: 3,
          minimumValue: 0,
          sync: false
        }
      },
      size: {
        value: 12,
        random: true,
        animation: {
          enable: true,
          speed: 30,
          minimumValue: 0.1,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 20,
        direction: 'none',
        random: true,
        straight: false,
        outMode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detectsOn: 'canvas',
      events: {
        resize: true
      }
    },
    retina_detect: true,
    emitters: {
      direction: 'none',
      life: {
        count: 1,
        duration: 0.1,
        delay: 0.1
      },
      rate: {
        delay: 0.1,
        quantity: 100
      },
      size: {
        width: 0,
        height: 0
      },
      position: {
        x: 50,
        y: 50
      }
    }
  };

  const handleBack = () => {
    router.push('/');
  };

  const handleCopy = async () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareText);
        alert('テキストをコピーしました！');
      } catch (err) {
        console.error('コピーに失敗しました:', err);
        // フォールバック
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('テキストをコピーしました！');
      }
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {showEffects && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={explosionOptions}
          className="absolute inset-0"
        />
      )}
      
      {showBeam && (
        <>
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-full bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent opacity-70"
            style={{ filter: 'blur(30px)' }}
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-32 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"
            style={{ filter: 'blur(20px)' }}
          />
        </>
      )}

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: 'spring',
          stiffness: 50,
          damping: 10,
          duration: 1.5 
        }}
        className="relative z-10 text-center px-6 py-12 mx-auto"
      >
        <motion.h1
          animate={{
            scale: [1, 1.2, 1],
            textShadow: [
              '0 0 20px #ff0000',
              '0 0 60px #ff6600',
              '0 0 20px #ff0000'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-12 tracking-wider"
          style={{ textShadow: '0 0 30px #ff0000' }}
        >
          {text}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 font-bold mb-12"
        >
          💥 爆破完了！スッキリした？ 💥
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(147, 51, 234, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBack}
          className="px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-black text-xl rounded-full hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-all duration-300 shadow-2xl transform hover:-translate-y-1"
        >
          🔄 もう一度爆破する
        </motion.button>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8 flex flex-col gap-6 items-center justify-center"
        >
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="px-6 py-3 bg-gray-800 text-white font-bold rounded-full hover:bg-gray-700 transition-all duration-300 flex items-center gap-2"
          >
            {soundEnabled ? '🔊 音声ON' : '🔇 音声OFF'}
          </button>
          
          {/* React Shareを使用したシェアボタン */}
          <div className="flex flex-col gap-4 items-center">
            <h3 className="text-white text-lg font-bold">🌟 シェアして友達にも教えよう！</h3>
            
            <div className="flex flex-wrap gap-3 justify-center items-center">
              {/* Twitter */}
              <TwitterShareButton
                url={shareUrl}
                title={shareText}
                hashtags={['ストレス解消', '爆破アプリ']}
                className="hover:scale-110 transition-transform duration-200"
              >
                <XIcon size={48} round />
              </TwitterShareButton>

              {/* Facebook */}
              <FacebookShareButton
                url={shareUrl}
                quote={shareText}
                className="hover:scale-110 transition-transform duration-200"
              >
                <FacebookIcon size={48} round />
              </FacebookShareButton>

              {/* LINE */}
              <LineShareButton
                url={shareUrl}
                title={shareText}
                className="hover:scale-110 transition-transform duration-200"
              >
                <LineIcon size={48} round />
              </LineShareButton>

              {/* Telegram */}
              <TelegramShareButton
                url={shareUrl}
                title={shareText}
                className="hover:scale-110 transition-transform duration-200"
              >
                <TelegramIcon size={48} round />
              </TelegramShareButton>

              {/* WhatsApp */}
              <WhatsappShareButton
                url={shareUrl}
                title={shareText}
                className="hover:scale-110 transition-transform duration-200"
              >
                <WhatsappIcon size={48} round />
              </WhatsappShareButton>

              {/* コピーボタン */}
              <button
                onClick={handleCopy}
                className="w-12 h-12 bg-gray-700 hover:bg-gray-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 text-xl"
                title="テキストをコピー"
              >
                📋
              </button>
            </div>
            
            {/* テキスト版のボタン（モバイル対応） */}
            <div className="flex flex-wrap gap-2 justify-center mt-2 sm:hidden">
              <TwitterShareButton
                url={shareUrl}
                title={shareText}
                hashtags={['ストレス解消', '爆破アプリ']}
              >
                <span className="px-3 py-2 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600 transition-colors">
                  𝕏 Twitter
                </span>
              </TwitterShareButton>

              <FacebookShareButton
                url={shareUrl}
                quote={shareText}
              >
                <span className="px-3 py-2 bg-blue-700 text-white text-sm rounded-full hover:bg-blue-800 transition-colors">
                  f Facebook
                </span>
              </FacebookShareButton>

              <LineShareButton
                url={shareUrl}
                title={shareText}
              >
                <span className="px-3 py-2 bg-green-500 text-white text-sm rounded-full hover:bg-green-600 transition-colors">
                  📱 LINE
                </span>
              </LineShareButton>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 2, 3] }}
            transition={{
              duration: 2,
              delay: 0.2 * i,
              repeat: Infinity,
              repeatDelay: 3
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(255,${100 + i * 30},0,0.6) 0%, transparent 70%)`,
              filter: 'blur(2px)'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Result() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full"
        />
      </div>
    }>
      <ResultContent />
    </Suspense>
  );
}