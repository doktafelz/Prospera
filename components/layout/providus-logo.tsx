const ProvidusLogo = ({ className = "" }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 220 50"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Providus Bank"
        >
            {/* Bird/Wing Icon */}
            <g>
                {/* Orange/Red upper part */}
                <path
                    d="M8 8 C12 4, 20 2, 28 6 C24 12, 18 16, 10 14 C6 12, 6 10, 8 8Z"
                    fill="#E85D04"
                />
                {/* Yellow middle part */}
                <path
                    d="M6 16 C10 12, 20 10, 30 14 C26 22, 18 28, 8 24 C2 20, 2 18, 6 16Z"
                    fill="#F9A825"
                />
                {/* Yellow-green lower part */}
                <path
                    d="M4 28 C8 24, 18 22, 28 26 C24 34, 16 40, 6 36 C0 32, 0 30, 4 28Z"
                    fill="#FBC02D"
                />
            </g>

            {/* PROVIDUSBANK Text */}
            <text
                x="42"
                y="32"
                fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
                fontSize="18"
                fontWeight="600"
                fill="#1a1a1a"
                letterSpacing="1"
            >
                PROVIDUSBANK
            </text>
        </svg>
    );
};

export default ProvidusLogo;
