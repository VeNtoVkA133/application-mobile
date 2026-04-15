import { Platform } from "react-native"
import { WebView } from "react-native-webview"


const isWeb = Platform.OS === 'web';
export default function C3pgame() {
    if(isWeb){
        return(
            <iframe
                src="/c3p/index.html"
                style={{ width: `100%`, height:'100%',border: 'none'}}
                title="Game"
            />
        );
    }else{
        return (
            <WebView
                source={{uri: 'file:///android_asset/c3p/index.html'}}
                allowFileAccess={true}
                allowUniversalAccessFromFileURLs={true}
                originWhitelist={['*']}
            />
        );
    }
}


