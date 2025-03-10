import { USDC_ABI} from "./abi/usdc";
import { USDT_ABI} from "./abi/usdt";
import { WBTC_ABI} from "./abi/wbtc";
import { WETH_ABI} from "./abi/weth";
import { SCR_ABI} from "./abi/scr";

interface Token {
    name: string;        // Nombre del token
    symbol: string;      // Símbolo del token
    decimals: number;    // Decimales del token
    contractId: string;  // ID del contrato
}

export const tokensAvailable: Token[] = [
    {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
        contractId: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    },
    {
        name: "USDT",
        symbol: "USDT",
        decimals: 6,
        contractId: "0xf55bec9cafdbe8730f096aa55dad6d22d44099df",
    },
    {
        name: "Scroll",
        symbol: "SCR",
        decimals: 18,
        contractId: "0xd29687c813d741e2f938f4ac377128810e217b1b",
    },
    {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        contractId: "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4",
    },
    {
        name: "Wrapped Ether",
        symbol: "WETH",
        decimals: 18,
        contractId: "0x5300000000000000000000000000000000000004",
    },
    {
        name: "Wrapped Bitcoin",
        symbol: "WBTC",
        decimals: 8,
        contractId: "0x3C1BCa5a656e69edCD0D4E36BEbb3FcDAcA60Cf1",
    },
    
  ];

export const abiByToken = [
    {
        contractId: "0x88b8E2161DEDC77EF4ab7585569D2415a1C1055D",
        ABI: USDT_ABI
    },
    {
        contractId: "0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701",
        ABI: SCR_ABI
    },
    {
        contractId: "0xf817257fed379853cDe0fa4F97AB987181B1E5Ea",
        ABI: USDC_ABI
    },
    {
        contractId: "0xB5a30b0FDc5EA94A52fDc42e3E9760Cb8449Fb37",
        ABI: WETH_ABI
    },
    {
        contractId: "0xcf5a6076cfa32686c0Df13aBaDa2b40dec133F1d",
        ABI: WBTC_ABI
    },
    
]

export const concatenatedTokens = tokensAvailable
        .map(
        (token) =>
            `Name: ${token.name}, Symbol: ${token.symbol}, Decimals: ${token.decimals}, Contract ID: ${token.contractId}`
        )
        .join("\n");