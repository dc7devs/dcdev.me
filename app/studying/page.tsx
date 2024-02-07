import { MediaTabs } from '@/components/media-integration-tabs';
import { Separator } from '@/components/ui/separator';

import { SVGProps } from 'react';

const SketchBooksImg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path className={'fill-white dark:fill-black'} d="M0 0H200V200H0z" />
      <path
        d="M117.41 57.128c-2.545-2.137-5.662-3.416-8.94-4.01a16.62 16.62 0 004.952-1.855c4.206-2.417 6.822-6.847 8.611-11.207.123-.298-.072-.748-.435-.75-5.28-.049-11.375-1.125-16.196 1.643-2.094 1.203-4.781 3.303-5.938 5.785-.12-.895-.275-1.733-.398-2.426-.057-.315-.303-.464-.605-.46-.919.011-1.653.123-2.483.506-.208.095-.376.329-.326.569.385 1.84.193 3.743.195 5.61 0 .828-.081 2.21.512 2.935-5.959-1.856-13.065.581-17.91 4.07-5.97 4.298-7.769 11.27-7.504 18.309.273 7.185 2.782 14.365 7.071 20.131 4.432 5.956 12.874 10.502 19.223 4.888 3.26 1.79 6.667 2.967 10.466 2.512 3.856-.464 7.44-3.12 9.944-5.954 4.943-5.595 7.093-13.029 7.257-20.387.163-7.3-1.706-15.05-7.496-19.91zM107.183 41.28c4.173-1.769 9.079-1.02 13.525-.908-1.731 3.911-4.156 7.495-7.843 9.81-3.928 2.468-9.091 2.671-13.462 1.308.025-.096.041-.197.063-.296 1.107-.611 2.074-1.427 3.074-2.209 1.714-1.336 3.548-2.32 5.534-3.18 3.189-1.382 6.885-2.216 9.61-4.468.094-.078.007-.227-.107-.182-6.392 2.446-12.839 4.807-18.003 9.377.057-.462.083-.938.076-1.422.58-3.557 4.49-6.542 7.533-7.83zm-8.16 11.262c.465.15.934.28 1.404.395a28.59 28.59 0 00-1.801.275c.155-.207.283-.434.398-.67zm19.096 41.72c-2.03 2.968-4.851 5.424-8.153 6.864-4.305 1.877-8.893.194-12.69-2.018-.686-.4-1.419.313-1.245.878-1.626.847-3.267 1.592-5.143 1.76-2.227.198-4.336-.731-6.203-1.832-2.902-1.71-5.17-4.509-6.95-7.309-3.444-5.418-5.193-11.993-5.224-18.387-.032-6.598 2.244-12.233 7.686-16.152 5-3.6 11.052-4.486 17.035-3.73.282.035.456-.38.166-.498-.137-.056-.275-.106-.413-.157.004-.008.01-.015.013-.024.367-1.14-.126-2.956-.087-4.179.045-1.432.114-2.878-.118-4.295a4.227 4.227 0 011.29-.253c.293 1.713.514 3.432.374 5.176-.03.38-.126.742-.241 1.1-.338.115-.503.572-.294.857-.092.28-.177.563-.228.852a.48.48 0 00.163.447l-.044.009c-.517.114-.316.844.188.783 6.311-.774 12.855-.246 18.059 3.746 5.447 4.177 7.134 11.243 7.279 17.788.144 6.51-1.525 13.173-5.22 18.573z"
        className={'dark:fill-white fill-black'}
      />
      <path
        d="M104.331 43.975c-.959.955-2.043 2.274-2.422 3.595-.036.123.121.188.195.093.395-.511.674-1.117 1.011-1.669.403-.656.871-1.269 1.4-1.83.117-.123-.062-.312-.184-.19zM109.029 41.233c-1.705 1.109-4.036 3.023-4.294 5.213-.019.155.186.296.299.148.551-.716.918-1.567 1.439-2.31.75-1.072 1.694-2.016 2.692-2.858.101-.086-.023-.267-.136-.193zM112.547 40.25c-1.14.554-2.108 1.339-2.984 2.249-.757.788-1.744 1.873-1.939 2.983-.032.186.182.262.306.15.744-.657 1.233-1.68 1.865-2.45.837-1.023 1.841-1.895 2.897-2.684.145-.11.024-.328-.145-.247zM115.147 40.065c-.988.33-1.811.948-2.544 1.675-.673.67-1.71 1.808-1.615 2.829.011.134.178.223.291.136.724-.554 1.106-1.61 1.695-2.317.662-.795 1.477-1.424 2.299-2.04.135-.102.052-.343-.126-.283zM115.913 41.572c-.386.37-.86.626-1.246.997-.052.052-.008.15.069.117.497-.217.954-.557 1.339-.94.108-.106-.051-.28-.162-.174zM93.019 56.563c-2.65-.782-6.493.227-8.926 1.353-.166.076-.036.311.123.277.038-.01.075-.017.115-.026-.688.418-1.33.914-1.924 1.47-1.663.64-3.21 1.517-4.442 2.597-.14.123-.045.407.16.32.972-.417 1.914-.885 2.864-1.338-.363.48-.689.985-.978 1.512-1.94 1.085-3.656 2.527-4.683 4.235-.097.162.127.33.27.23 1.308-.915 2.444-2.032 3.721-2.993a11.44 11.44 0 00-.618 2.195c-1.515 1.21-3.135 3.008-3.406 4.796-.03.209.222.29.354.154 1.103-1.132 1.856-2.514 2.914-3.701-.013.231-.025.462-.02.693.002.194.284.203.328.024.116-.47.233-.934.353-1.393.793-.72 1.684-1.278 2.609-1.779-.1.654-.09 1.319.062 1.97-.017.003-.032.004-.05.012-3.08 1.44-6.16 4.55-6.62 8.058-.033.259.379.382.497.15 1.68-3.348 2.964-5.718 6.325-7.85a.174.174 0 00.08-.168c.059-.023.115-.064.133-.126.266-.88.414-1.742.627-2.593l.721-.36c.167-.084.036-.308-.122-.278-.153.03-.303.065-.453.103.15-.508.337-1.014.606-1.515.184-.34.398-.655.63-.953a43.19 43.19 0 012.056-.686c.203-.063.13-.39-.08-.362-.4.053-.807.127-1.223.22.675-.654 1.452-1.206 2.255-1.701a.1.1 0 00.038-.051c.622-.14 1.246-.272 1.866-.415.132-.03.113-.232-.023-.234-1.648-.04-3.439.205-5.17.699a19.187 19.187 0 012.06-1.318c1.151-.248 2.303-.48 3.476-.648 1.168-.167 2.372-.144 3.5-.508.04-.013.027-.062-.005-.072zm-11.02 7.878c-.86.337-1.67.797-2.436 1.318.235-.787.511-1.557.86-2.309a18.776 18.776 0 012.742-1.383 7.79 7.79 0 00-1.166 2.374zm4.344-5.158a8.91 8.91 0 00-2.366 1.794c-.958.276-1.932.64-2.877 1.087a9.808 9.808 0 011.164-1.535c.407-.18.82-.351 1.238-.508.93-.347 1.88-.607 2.84-.838zM81.317 70.892c-3.138 1.939-6.434 6.277-5.345 10.181.052.188.285.126.335-.02.614-1.84.689-3.674 1.567-5.456.856-1.735 2.189-3.177 3.69-4.372.213-.17-.024-.472-.247-.333zM80.46 75.585a14.34 14.34 0 00-2.688 4.136c-.668 1.548-1.484 4.106-.642 5.714.07.132.24.071.281-.043.53-1.524.394-3.262.882-4.843.522-1.699 1.445-3.294 2.521-4.697.176-.232-.164-.472-.354-.267zM80.757 79.915a11.85 11.85 0 00-1.963 3.39c-.482 1.272-1.046 3.244-.43 4.532.068.144.295.18.363.008.522-1.32.385-2.888.812-4.276.366-1.2.94-2.326 1.62-3.375.174-.268-.203-.518-.402-.279zM81.385 83.446c-1.163 2.046-2.758 6.289-.178 7.988.115.077.253-.057.22-.178-.226-.784-.542-1.526-.687-2.334-.305-1.688.386-3.757 1.077-5.191.14-.29-.263-.58-.432-.285zM83.133 91.607c-.072-1.266.2-2.575.628-3.76.09-.253-.305-.47-.432-.22-1.056 2.06-1.962 6.138.254 7.802.102.077.271.031.264-.118-.062-1.26-.642-2.415-.714-3.704zM85.693 93.8c-.134-1.203.166-2.438.62-3.543.114-.277-.292-.415-.425-.163-.626 1.19-.978 2.393-.97 3.752.005 1.102.368 2.675 1.432 3.207.094.048.235-.014.222-.134-.113-1.076-.755-2.012-.88-3.12zM89.933 97.803c-.393-.647-1.078-.978-1.422-1.688-.4-.83-.309-1.787-.086-2.647.08-.305-.362-.465-.469-.16-.318.896-.538 1.974-.206 2.902.303.848 1.033 1.94 2.054 1.837.119-.013.194-.138.13-.244zM92.212 96.866c-.133-.32-.47-.358-.675-.607-.195-.238-.214-.578-.174-.87.047-.357-.476-.52-.56-.146-.108.489-.083.967.184 1.401.226.368.804.75 1.19.395.042-.04.056-.119.035-.173z"
        className={'dark:fill-white fill-black'}
      />
      <path
        d="M87.283 60.032c-1.452 1.352-3.742 4.86-2.426 6.916.067.105.212.083.25-.031.386-1.123.291-2.36.68-3.513.39-1.166 1.022-2.2 1.726-3.199.1-.14-.115-.28-.23-.173zM89.167 62.034c.153-.234-.163-.48-.346-.264-.687.817-1.182 1.693-1.433 2.733-.148.616-.212 1.473.358 1.885.124.09.277.029.315-.119.136-.543-.02-1.116.049-1.674.112-.915.559-1.8 1.057-2.56zM89.891 63.525c-.367.532-.607 1.104-.58 1.759.02.453.314.991.82.97.092-.003.178-.095.163-.188-.041-.306-.242-.549-.308-.85-.107-.485.126-.995.36-1.404.172-.301-.257-.571-.455-.287zM91.633 64.166c-.339.492-.531 1.293-.196 1.834.178.29.56.107.575-.186.027-.495-.128-.884.128-1.357.183-.336-.295-.597-.507-.291zM121.856 114.59h-87.4v-7.822h87.4v7.822zm-86.096-1.304h84.791v-5.215h-84.79v5.215zM42.935 158.054H31.412v-14.126h11.523v14.126zm-10.219-1.304h8.914v-11.518h-8.914v11.518z"
        className={'dark:fill-white fill-black'}
      />
      <path
        d="M46.306 107.217c-2.765 1.584-5.621 3.587-7.885 5.827-.123.122.039.314.183.232 2.786-1.546 5.45-3.727 7.898-5.763.172-.144.005-.409-.196-.296zM48.544 107.853a88.344 88.344 0 00-4.12 2.833c-1.193.877-2.565 1.794-3.463 2.985-.13.173.06.368.242.272 1.29-.691 2.417-1.815 3.559-2.731a117.784 117.784 0 014-3.047c.2-.146-.012-.446-.218-.312zM51.776 107.704c-1.349.811-2.59 1.779-3.798 2.788-.961.801-2.041 1.655-2.69 2.741-.092.153.107.299.244.219.932-.547 1.684-1.374 2.482-2.095 1.295-1.17 2.661-2.255 3.979-3.396.152-.131-.06-.351-.217-.257zM54.68 107.714c-1.29.797-2.498 1.706-3.679 2.653-1.143.918-2.645 2.018-3.32 3.344-.09.178.124.323.274.233 1.286-.751 2.293-2.059 3.413-3.034 1.154-1.005 2.354-1.951 3.507-2.955.136-.118-.049-.332-.195-.241zM57.842 107.353c-1.408.956-2.688 2.123-3.957 3.254-.96.856-2.307 1.767-2.799 2.99-.048.118.114.215.211.157 1.15-.689 2.067-1.81 3.053-2.722 1.228-1.14 2.51-2.217 3.758-3.334.21-.186-.033-.502-.266-.345zM59.961 107.857c-1.25.955-2.419 2.029-3.587 3.082-.944.852-2.062 1.659-2.786 2.712-.138.2.098.494.321.365 1.236-.716 2.251-1.921 3.287-2.897 1.027-.969 2.06-1.944 3.008-2.99.138-.154-.077-.399-.243-.272zM63.46 107.567a567.9 567.9 0 00-2.983 2.778c-.932.875-2.21 1.765-2.835 2.885-.08.141.09.325.238.258.956-.439 1.682-1.362 2.423-2.09 1.183-1.161 2.312-2.375 3.436-3.591.164-.178-.109-.396-.278-.24zM67.494 107.842a22.618 22.618 0 00-3.038 2.3c-.702.636-2.044 1.661-2.016 2.706.003.119.158.22.267.162.817-.43 1.39-1.551 2.03-2.22a22.373 22.373 0 013.005-2.616c.22-.159-.025-.473-.248-.332zM72.14 107.672c-1.245.811-2.398 1.738-3.522 2.706-.81.697-2.103 1.513-2.45 2.576-.039.123.105.229.215.192.89-.293 1.541-1.165 2.201-1.79 1.22-1.155 2.463-2.354 3.834-3.332.238-.171-.04-.508-.279-.352zM76.027 108.013c-1.33.807-2.546 1.756-3.738 2.753-.987.825-2.358 1.761-2.93 2.944-.075.155.103.346.263.27 1.064-.505 1.902-1.602 2.76-2.396 1.235-1.143 2.493-2.28 3.864-3.259.2-.144-.01-.438-.219-.312zM78.884 107.885c-1.104 1.046-2.24 2.056-3.33 3.117-.822.801-2.016 1.645-2.48 2.709-.06.141.076.324.233.256 1.085-.472 1.951-1.691 2.767-2.528 1.058-1.083 2.06-2.213 3.1-3.309.172-.181-.116-.409-.29-.245zM82.885 107.974c-1.006.169-1.853.966-2.622 1.589a31.916 31.916 0 00-1.911 1.714c-.422.403-1.11.939-1.12 1.568-.001.097.115.19.208.172.444-.09.698-.465 1.008-.776a53.26 53.26 0 011.817-1.74c.579-.53 1.166-1.044 1.744-1.574.207-.19.627-.817.888-.887.038-.01.025-.072-.012-.066zM85.824 107.416c-1.108 1.009-2.215 2.014-3.305 3.042-.865.817-2.001 1.654-2.559 2.714-.099.189.06.477.296.352 1.076-.568 1.896-1.701 2.74-2.566 1.052-1.077 2.048-2.208 3.061-3.322.14-.155-.083-.356-.233-.22zM88.71 107.413c-.96.882-1.916 1.763-2.79 2.733-.592.653-1.758 1.606-1.767 2.534 0 .119.136.192.24.157.833-.291 1.466-1.596 2.026-2.26.833-.989 1.668-1.979 2.537-2.939.146-.161-.09-.368-.246-.225zM92.25 107.255c-1.138.97-2.193 2.026-3.237 3.095a82.9 82.9 0 00-1.454 1.541c-.326.351-.68.608-.653 1.105.005.085.079.157.166.152.868-.054 1.698-1.499 2.232-2.089 1.071-1.185 2.151-2.363 3.183-3.582.141-.164-.08-.356-.238-.222zM94.476 107.83c-.966.824-1.9 1.685-2.795 2.583-.43.431-1.52 1.293-1.393 1.98.011.065.094.121.16.112.645-.085 1.276-1.212 1.7-1.667a56.406 56.406 0 012.613-2.653c.211-.199-.059-.547-.285-.355zM98.702 106.739a34.422 34.422 0 00-3.139 2.711c-.85.835-2 1.83-2.396 2.977-.056.166.105.336.27.23 1.022-.66 1.764-1.892 2.597-2.78a54.394 54.394 0 012.892-2.879c.145-.132-.069-.379-.224-.259zM100.763 107.36c-1.251.949-2.357 2.029-3.385 3.216-.578.669-1.685 1.775-1.62 2.735.008.113.12.176.22.124.898-.464 1.572-1.927 2.208-2.711a32.667 32.667 0 012.825-3.032c.188-.179-.03-.498-.248-.332zM104.004 107.378c-.996.829-1.89 1.766-2.748 2.734-.591.667-1.69 1.613-1.667 2.566.003.144.16.188.268.134.82-.407 1.382-1.559 1.952-2.259.796-.98 1.624-1.934 2.424-2.91.123-.149-.069-.398-.229-.265zM107.504 107.676c-1.064.803-2.017 1.728-2.906 2.72-.591.66-1.468 1.496-1.447 2.434.002.099.13.193.221.123.778-.602 1.295-1.579 1.927-2.339.762-.916 1.579-1.804 2.47-2.595.209-.184-.039-.514-.265-.343zM110.534 107.56c-.853.881-1.625 1.824-2.38 2.789-.385.492-1.998 2.148-1.681 2.73-.072-.129-.255-.063-.261.07-.032.663 1.34-.736 1.379-.785 1.129-1.482 2.091-3.098 3.254-4.552.166-.204-.132-.434-.311-.252zM113.778 107.358a49.735 49.735 0 00-3.157 3.399c-.614.72-1.741 1.637-1.86 2.644-.02.172.148.259.29.185.918-.484 1.549-1.603 2.192-2.383a185.283 185.283 0 002.827-3.547c.143-.183-.117-.469-.292-.298zM117.318 108.003a12.933 12.933 0 00-2.956 2.365c-.624.667-2.36 2.307-1.909 3.319.035.083.129.15.223.11.412-.173.545-.536.758-.915.309-.553.707-1.057 1.097-1.553.878-1.116 1.932-2.104 3.034-2.995.213-.171-.022-.463-.247-.331zM120.245 107.432c-1.264.958-2.351 2.089-3.398 3.277-.72.814-2.023 1.927-2.159 3.051-.015.128.108.261.244.204 1.052-.445 1.8-1.94 2.5-2.812.965-1.203 1.979-2.371 2.991-3.532.111-.128-.046-.288-.178-.188zM120.845 109.336c-.675.603-1.313 1.224-1.889 1.922-.43.521-1.044 1.192-1.039 1.9.002.129.153.191.256.13.238-.139.237-.143.419-.37.451-.569.808-1.242 1.254-1.816a31.75 31.75 0 011.263-1.531c.155-.176-.099-.382-.264-.235zM42.312 107.239c-1.272.624-2.425 1.453-3.561 2.292-1.013.748-2.207 1.526-2.919 2.582-.087.131.08.246.197.195 1.132-.508 2.094-1.483 3.067-2.245 1.121-.879 2.303-1.681 3.393-2.595.134-.113-.04-.297-.177-.229zM39.13 107.542c-.654.212-1.27.465-1.876.789-.543.291-1.188.645-1.48 1.202-.09.17.104.311.255.268.504-.142.926-.547 1.354-.837a26.253 26.253 0 011.865-1.15c.15-.082.044-.323-.118-.272zM114.15 116.716c-3.622 1.969-7.374 3.943-10.802 6.235-.184.123-.024.421.179.34 3.811-1.523 7.482-3.898 10.778-6.319.153-.111.018-.35-.155-.256zM116.029 117.639c-3.092 1.948-6.656 3.604-9.448 5.969-.135.114-.049.383.145.304 3.4-1.362 6.614-3.786 9.557-5.937.223-.162-.027-.479-.254-.336zM117.555 119.743c-1.13.463-2.194 1.086-3.249 1.701-1.063.62-2.284 1.252-3.095 2.195-.105.121.012.329.175.27 1.041-.371 1.936-1.106 2.862-1.699 1.141-.729 2.325-1.408 3.439-2.179.142-.099.043-.36-.132-.288zM120.254 120.084c-.817.521-1.613 1.078-2.409 1.633-.692.482-1.692.874-2.155 1.59-.086.133-.019.329.163.313.873-.082 1.651-.867 2.329-1.378a27.786 27.786 0 002.266-1.917c.131-.122-.048-.336-.194-.241zM121.672 121.28c-.538.333-1.075.668-1.608 1.009-.547.348-1.143.664-1.499 1.224-.094.147.089.279.222.247.611-.145 1.102-.592 1.6-.953.516-.376 1.035-.747 1.555-1.117.23-.162-.031-.559-.27-.41zM75.574 118.157c-1.558.781-3 1.824-4.45 2.784-1.922 1.271-3.965 2.466-5.695 3.994-.13.116.035.288.174.226 1.883-.865 3.577-2.133 5.29-3.289 1.642-1.108 3.375-2.18 4.876-3.475.142-.123-.048-.314-.195-.24zM77.53 119.633c-2.585 1.313-5.565 2.711-7.607 4.817-.124.128.036.305.183.233 2.64-1.28 5.044-3.283 7.531-4.844.125-.079.028-.274-.106-.206zM77.45 121.491c-.553.494-1.137.951-1.745 1.377-.494.346-1.028.659-1.443 1.1-.104.113.005.283.149.249 1.3-.309 2.466-1.478 3.346-2.422.168-.18-.124-.467-.306-.304zM72.205 135.451c-2.965 1.324-6.237 3.262-8.566 5.539-.146.142.056.328.212.251 2.963-1.43 5.835-3.574 8.55-5.437.19-.131.015-.448-.196-.353zM76.547 135.034c-1.401.734-2.708 1.603-4.012 2.5-1.256.865-2.677 1.747-3.618 2.961-.111.144.03.39.217.306 1.256-.575 2.318-1.523 3.425-2.337 1.415-1.036 2.845-2.045 4.162-3.206.126-.111-.035-.296-.174-.224zM78.625 135.827c-1.22.584-2.337 1.345-3.431 2.133-.871.628-1.93 1.285-2.437 2.259-.074.143.08.31.227.253 1.008-.391 1.832-1.273 2.679-1.929 1.058-.821 2.162-1.581 3.162-2.472.147-.131-.05-.318-.2-.244zM81.312 136.433c-.607.485-1.237.941-1.838 1.432-.552.451-1.279.885-1.578 1.551-.07.158.08.296.234.254.698-.184 1.243-.852 1.767-1.32.572-.512 1.111-1.057 1.674-1.575.2-.185-.04-.515-.26-.342zM83.816 137.204c-.332.322-.722.561-1.038.9-.086.09-.025.277.114.26.53-.065.947-.39 1.317-.756.26-.255-.132-.656-.393-.404zM53.87 122.328c-.816.667-1.617 1.337-2.373 2.074-.663.645-1.474 1.313-1.865 2.165-.069.151.093.303.238.216.794-.474 1.392-1.311 2.03-1.973.72-.748 1.435-1.507 2.178-2.232.13-.128-.063-.366-.208-.25zM52.996 125.494c-.508.472-1.014.945-1.52 1.419-.475.443-1.185.984-1.367 1.624-.033.116.09.214.198.183.54-.155.93-.674 1.315-1.061.579-.582 1.132-1.193 1.691-1.793.21-.225-.08-.592-.317-.372zM51.57 129.038c-.353.338-.707.674-1.068 1.001-.36.325-.76.619-1.032 1.027-.079.121.072.284.2.233.879-.344 1.578-1.286 2.218-1.951.176-.183-.136-.485-.319-.31zM153.255 106.804a337.044 337.044 0 00-3.122 10.481c-1.047 3.726-2.362 7.567-2.833 11.417-.025.214.296.325.376.11 1.256-3.413 1.938-7.093 2.892-10.601 1.025-3.768 2.083-7.524 3.078-11.3.058-.221-.321-.326-.391-.107zM155.063 110.824c-1.295 3.112-2.253 6.38-3.195 9.613-.851 2.927-1.981 6.042-2.124 9.106-.007.162.244.212.307.067 1.232-2.799 1.761-5.983 2.601-8.92.927-3.243 1.986-6.465 2.721-9.756.041-.181-.237-.287-.31-.11zM155.872 114.88c-1.105 3.152-1.916 6.402-2.762 9.63-.71 2.705-1.54 5.439-1.952 8.208-.032.218.292.321.376.11 1.126-2.842 1.767-5.901 2.511-8.862.752-2.992 1.531-5.985 2.11-9.015.037-.188-.221-.246-.283-.071zM156.323 121.744c-1.753 4.222-3.376 9.282-3.697 13.863-.012.183.248.308.333.111.826-1.95 1.178-4.089 1.672-6.139.624-2.593 1.325-5.161 2.053-7.724.059-.209-.28-.306-.361-.111zM156.759 127.204c-.809 2.46-1.854 5.356-1.876 7.963-.001.17.242.208.316.066 1.188-2.331 1.303-5.348 1.999-7.866.079-.287-.344-.453-.439-.163zM157.212 132.509c-.186.611-.378 1.219-.547 1.834-.132.476-.29.983-.194 1.474.035.181.263.233.356.063.228-.426.278-.923.388-1.388.145-.614.328-1.218.494-1.825.091-.325-.4-.483-.497-.158zM169.981 140.379c-.775 1.734-1.251 3.612-1.834 5.418-.75 2.325-1.618 4.628-2.203 7.002-.054.223.283.303.376.11 1.788-3.74 3.55-8.289 4.028-12.42.024-.214-.277-.315-.367-.11zM171.48 143.119c-1.572 3.598-3.163 7.594-3.935 11.448-.047.236.289.306.389.11 1.775-3.492 2.9-7.654 3.808-11.453.037-.151-.196-.256-.262-.105zM171.971 146.971c-.732 1.779-1.692 3.77-2.015 5.668-.035.201.238.313.36.156 1.205-1.529 1.719-3.823 2.207-5.676.096-.366-.416-.479-.552-.148zM173.184 149.054a7.923 7.923 0 00-.729 2.134c-.02.102.11.221.194.122.509-.596.6-1.396.909-2.095.108-.243-.254-.394-.374-.161zM82.815 144.351c-2.938 1.477-5.575 3.912-8.245 5.829-2.976 2.139-6.052 4.145-8.963 6.37-.163.123-.016.368.168.27 3.018-1.614 5.815-3.611 8.596-5.6 2.855-2.041 6.24-4.05 8.617-6.643.112-.123-.027-.298-.173-.226zM86.951 144.315c-5.394 3.431-11.026 7.111-15.584 11.622-.123.12.045.335.19.236 5.298-3.676 10.498-7.624 15.624-11.538.204-.155-.016-.456-.23-.32zM90.363 145.952c-3.92 2.248-8.38 5.037-11.462 8.368-.14.15.058.351.224.26 1.95-1.066 3.66-2.58 5.437-3.906 1.987-1.484 4.007-2.932 5.958-4.462.151-.118.017-.361-.157-.26zM94.678 145.93c-1.689 1.311-3.384 2.611-5.05 3.95-1.472 1.186-3.135 2.304-4.325 3.787-.152.19.085.392.274.287 1.641-.902 3.047-2.307 4.479-3.505a158.491 158.491 0 004.864-4.247c.154-.14-.08-.398-.242-.272zM97.052 147.835a33.898 33.898 0 00-3.224 2.319c-.84.681-1.92 1.462-2.413 2.438-.083.164.101.29.243.22.989-.488 1.768-1.455 2.586-2.176a39.598 39.598 0 013.087-2.449c.239-.174-.04-.505-.279-.352zM98.032 150.346c-.531.353-1.16.707-1.474 1.282-.088.16.104.29.244.219.526-.27.983-.703 1.477-1.032.282-.188.038-.659-.247-.469zM138.724 145.259c-1.671.434-3.229 2.249-4.499 3.303-2.247 1.865-4.508 3.752-6.632 5.755-.159.149.069.36.236.268 2.129-1.178 3.992-2.992 5.834-4.563 1.653-1.41 3.778-3.066 4.957-4.613-.037.049.033.106.074.061.047-.052.102-.095.102-.166.001-.038-.042-.052-.072-.045zM138.907 147.405c-2.662 1.53-5.542 3.707-7.491 6.096-.165.203.104.418.299.301 1.289-.77 2.401-1.834 3.54-2.805 1.293-1.101 2.609-2.182 3.824-3.368.118-.115-.033-.305-.172-.224zM138.382 150.259a71.644 71.644 0 00-2.039 1.598c-.488.399-1.018.802-1.374 1.329-.1.147.027.402.222.309.66-.311 1.203-.852 1.742-1.335a62.18 62.18 0 001.715-1.616c.163-.157-.093-.417-.266-.285zM57.415 147.076c-2.048 1.28-3.949 2.817-5.87 4.277-1.324 1.004-3.1 2.005-4.116 3.341-.063.083.032.207.128.179 1.434-.41 2.763-1.818 3.931-2.697 2.075-1.563 4.176-3.136 6.116-4.863.132-.117-.044-.327-.189-.237zM54.045 147.08a100.728 100.728 0 00-3.719 2.513c-.763.536-1.896 1.064-2.453 1.831-.086.117-.02.33.155.303 1.022-.163 2.093-1.206 2.914-1.782 1.145-.805 2.276-1.66 3.282-2.636.118-.115-.038-.317-.179-.229zM51.17 147.203c-1.119.405-2.012 1.362-3.09 1.885-.264.128-.086.527.186.415 1.087-.449 2.293-1.134 3.09-2.02.113-.128-.02-.34-.185-.28zM42.129 144.488c-3.373 1.873-6.733 4.424-9.516 7.1-.149.142.065.369.229.265 3.267-2.094 6.6-4.54 9.516-7.1.16-.14-.066-.354-.23-.265zM41.969 146.417c-3.016 2.242-6.13 4.518-8.86 7.106-.135.13.05.333.201.245 3.272-1.865 6.141-4.533 8.887-7.087.149-.137-.07-.382-.228-.264zM40.022 150.581c-1.428 1.03-3.136 1.821-4.369 3.09-.135.138.04.368.21.3 1.645-.654 3.04-1.959 4.389-3.07.195-.16-.022-.469-.23-.32z"
        className={'dark:fill-white fill-black'}
      />
      <path
        d="M64.843 136.699c.349-2.239-.019-4.719-.087-6.948-.088-2.86.185-5.787-.121-8.629-.041-.371-.492-.401-.638-.102-1.685-.253-3.457-.107-5.153-.074-2.059.041-4.348-.131-6.303.582-.06.021-.084.073-.093.129a.19.19 0 00-.116.068c-.61.8-.363 2.069-.33 3.011.063 1.835.145 3.671.258 5.504.105 1.73.22 3.459.332 5.188.05.78-.067 1.685.49 2.298.108.117.356.12.455-.014.058-.079.106-.168.151-.261 3.433.765 7.354.42 10.828.459.691.008.753-.836.327-1.211zm-10.923.006c.306-1.729-.344-4.456-.42-5.784-.095-1.639-.201-3.275-.299-4.913-.073-1.199.178-3.046-.48-4.113 1.712.428 3.562.215 5.312.189 1.876-.026 3.8.132 5.675.007-.462 2.192-.308 4.539-.274 6.753.038 2.453-.158 5.212.27 7.678-3.188-.01-6.637-.289-9.784.183z"
        className={'dark:fill-white fill-black'}
      />
      <mask
        id="a"
        style={{
          maskType: 'luminance'
        }}
        maskUnits="userSpaceOnUse"
        x={131}
        y={83}
        width={47}
        height={78}
      >
        <path
          d="M131.358 83.21h45.908v77.037h-45.908V83.21z"
          className={'dark:fill-white fill-black'}
        />
      </mask>
      <g mask="url(#a)">
        <path
          d="M177.064 153.928c-3.51-11.616-8.819-22.828-13.641-33.941-2.54-5.854-5.086-11.707-7.547-17.595-2.491-5.957-4.367-12.603-7.497-18.247.015-.361-.228-.764-.699-.772-5.66-.097-12.958 2.117-16.191 7.108-.187.289.226.634.491.442l.166-.118c1.047 6.204 4.282 12.333 6.694 18.067 2.736 6.506 5.223 13.112 7.902 19.641 2.564 6.246 5.19 12.465 7.783 18.699a201.448 201.448 0 012.611 6.626c.658 1.75 1.024 3.722 1.951 5.343.195.343.712.131.759-.201.011-.082.008-.164.014-.247 2.292 1.87 6.018 1.333 8.632.552 2.241-.668 6.309-2.345 7.709-4.635.433.202 1.043-.126.863-.722zm-3.565 1.108c-1.422 1.081-3.043 1.866-4.692 2.529-3.165 1.272-5.822.919-8.973.229-.172-1.247-.779-2.497-1.182-3.639-.805-2.282-1.695-4.533-2.591-6.779-2.585-6.476-5.395-12.864-8.076-19.301-2.57-6.169-4.927-12.422-7.491-18.595-1.279-3.08-2.578-6.15-3.821-9.245-1.311-3.266-2.345-6.724-3.866-9.9 4.669-3.287 8.984-5.553 14.993-5.626.024 0 .04-.012.062-.014 1.052 5.49 3.789 10.965 5.894 16.091 2.564 6.247 5.261 12.439 7.948 18.634 2.542 5.86 5.078 11.72 7.522 17.621 2.252 5.438 4.129 11.025 6.334 16.476-.782.361-1.361.986-2.061 1.519z"
          className={'dark:fill-white fill-black'}
        />
      </g>
      <path
        d="M151.053 100.488a.316.316 0 00.132-.313c-.727-4.154-2.755-8.858-5.031-12.467.014-.01.03-.016.044-.027.188-.128.149-.417-.099-.438-2.081-.175-4.248.886-6.113 1.695-1.211.526-3.133 1.17-3.889 2.364l-.002-.004c-.147-.193-.473-.007-.41.216.641 2.27 1.751 4.394 2.735 6.531 1 2.176 1.863 4.492 3.206 6.486-.175.249-.058.664.289.685.068.004.138-.005.207-.005.073.066.171.052.24-.007 1.675-.089 3.516-1.175 4.973-1.815 1.072-.47 3.489-1.121 4.001-2.274.104-.233-.06-.525-.283-.627zm-5.072 1.915c-1.192.552-2.629.979-3.774 1.694-.469-1.665-1.222-3.23-1.944-4.81-1.118-2.448-2.152-5.057-3.677-7.295.446-.08.771-.296 1.245-.567 1.014-.58 2.092-1.047 3.16-1.517 1.441-.633 3.071-1.041 4.474-1.79 1.273 4.123 3.086 8.564 5.184 12.285.003.007.008.009.011.014-.705.005-1.504.529-2.081.792-.867.396-1.733.792-2.598 1.194zM146.713 148.355c-.12-2.755-1.288-6.57-4.176-7.361.036-.137.074-.274.108-.41.133-.172.172-.414.135-.638.631-3.33.103-7.199.139-10.496.045-4.004.097-8.301-.781-12.228a.46.46 0 00-.302-.336.489.489 0 00-.414-.323c-3.238-.464-6.649-.231-9.915-.222-2.338.005-4.763-.091-7.11.177a.382.382 0 00-.136-.065c-.041-.012-.084-.017-.125-.027.412-1.413.196-3.076.212-4.532.025-2.211.33-4.806-.215-7.003a.485.485 0 00-.119-.466.095.095 0 01-.004-.018c-.088-.276-.418-.288-.58-.106-14.803-.266-75.779.388-91.456.146a.281.281 0 00-.244.124c-.178-.22-.583-.188-.649.153-.462 2.385-.305 4.963-.353 7.387-.028 1.392-.667 3.956.243 5.103.051.067.136.088.22.08-.01.195.098.389.334.399 1.822.07 7.98.119 16.31.143-.214 3.852.004 7.765-.075 11.623-.079 3.837-.217 7.674-.28 11.512-.555.031-1.11.067-1.662.071-2.523.021-5.045.159-7.567.265-4.621.195-9.21-.06-13.824.005-.354.006-.382.496-.064.593 3.455 1.044 7.197.947 10.768.889 2.548-.043 5.097-.17 7.645-.254 2.301-.077 4.845.198 7.14-.24 2.452.502 5.137.441 7.55.464 3.716.034 7.435-.186 11.143-.401 7.737-.451 15.42-.574 23.169-.612 16.73-.084 33.45-.487 50.171-.937.004.02.005.042.008.062a4.553 4.553 0 00-.667-.032c-.215.007-.316.275-.13.402 5.778 3.98 4.575 12.32 2.135 18.069-19.328-.586-38.673-.259-58.007-.319-10.02-.032-20.012.062-30.026.444-10.074.384-20.043.123-30.107.004a.457.457 0 00.06-.215c.068-2.543-.56-5.188-.584-7.769-.028-3.036.121-6.138.23-9.161 0-.01-.017-.019-.025-.008-1.56 2.163-1.47 4.992-1.568 7.576-.105 2.786-.437 7.055.987 9.559a.526.526 0 00.18.178c-.178.218-.135.583.238.649 8.94 1.561 98.24-.17 118.674.505a.73.73 0 00.639-.31.664.664 0 00.565-.413c1.635-3.645 2.335-7.701 2.162-11.68zM31.606 116.886c.684-1.206.245-3.54.26-4.775.027-2.303.233-4.719-.018-7.017.025.01.05.026.08.029 7.262 1.251 84.304-.065 91.259.14-.297 1.951-.061 4.118-.07 6.045-.006 1.536-.295 3.365.06 4.898-.009.003-.018.01-.028.013-2.899-.51-6.072-.254-8.973-.274-4.126-.029-8.251-.052-12.377-.115-7.958-.121-15.916-.271-23.875-.254-7.93.015-15.859.263-23.786.466-7.474.19-15.092.088-22.532.844zm110.201 22.507c-7.637-.158-15.325.362-22.959.57-8.326.228-16.656.308-24.983.356-7.795.046-15.543.078-23.325.594-3.716.247-7.43.486-11.153.58-2.836.072-5.691-.236-8.524-.325a.47.47 0 00-.153-.065c-.651-.145-1.317-.182-1.985-.176.254-7.552 1.267-15.598.223-23.088 23.973.063 64.446-.065 73.519-.405a.362.362 0 00.192.093c2.956.474 6.049.238 9.036.238 3.151 0 6.383.297 9.521.005-.201 3.502.213 7.176.532 10.652.328 3.579-.178 7.376.059 10.971z"
        className={'dark:fill-white fill-black'}
      />
      <path
        d="M42.875 151.806c-.152-2.335.234-4.796-.04-7.098.112-.131.123-.36-.062-.438-1.438-.613-3.096-.445-4.637-.443-1.87.004-3.93-.123-5.774.302-.148-.167-.442-.09-.507.137a.27.27 0 00-.028.487c-.07 2.381.224 4.802.263 7.185.027 1.681-.493 3.957.133 5.535a.187.187 0 00.105.177c1.246.619 2.825.342 4.186.314 1.933-.04 3.864-.085 5.796-.052a.489.489 0 00.433-.221.256.256 0 00.277-.194c.467-1.776-.025-3.878-.145-5.691zm-5.593 5.1c-1.443.047-3.22-.187-4.613.297.73-1.655.34-4.268.338-5.978-.003-2.044.04-4.268-.41-6.292 1.559.243 3.196.062 4.763.037 1.612-.025 3.39.245 4.98-.092-.843 1.553-.645 3.621-.57 5.316.091 2.082.072 4.541.549 6.624a130.13 130.13 0 00-5.037.088zM139.876 151.909c.016-2.476.277-5.068-.128-7.519-.027-.161-.163-.224-.3-.213-.08-.196-.261-.356-.528-.329-7.211.777-14.572.214-21.814.25-7.69.04-15.379.272-23.068.429-7.712.159-15.415.17-23.126-.018-7.634-.185-15.478-.831-23.095-.117-.07-.358-.623-.39-.693-.002-.36 2.018-.188 4.085-.047 6.118.167 2.444-.015 5.05.326 7.453.005.034.025.055.043.078-.084.235.074.538.379.528 15.562-.551 29.16-.743 43.738-.996 15.71-.272 31.418-.14 47.124-.354.058-.001.107-.017.156-.032.036.135.068.274.115.401.106.282.561.349.682.035.631-1.633.226-3.981.236-5.712zm-49.411 4.616c-7.377.128-33.723 1.004-42.626 1.269.445-1.507.313-3.224.281-4.78-.054-2.615-.052-5.261-.244-7.874 7.64.397 15.355.241 23.008.449 7.707.21 15.41.154 23.117-.004 7.686-.159 15.37-.389 23.058-.453 7.325-.062 14.718.433 22.016-.314-.447 2.298-.29 4.751-.307 7.076-.01 1.293-.243 2.927-.101 4.353-16.079-.276-32.124-.001-48.202.278zM138.019 124.577c-.132-.638-.906-.509-1.152-.035-3.48-.812-7.601-.323-11.117-.397-6.538-.134-13.076-.202-19.616-.247-6.535-.047-13.072-.063-19.607-.065-6.12-.002-12.35-.305-18.452.224-.328.03-.354.421-.108.543-.392 1.442-.506 2.944-.834 4.401-.093.412.21.688.63.677 13.452-.372 58.402.083 69.984-.309.385-.013.583-.351.602-.693a15.896 15.896 0 00-.33-4.099zm-69.732 3.947c.207-1.272.32-2.552.436-3.837 5.89.538 11.92.298 17.825.325 6.538.029 13.077.04 19.615.079 6.153.034 12.303.101 18.455.211 4.047.072 8.222.422 12.27.212.138.853.197 1.713.184 2.575-11.374.35-56.002.049-68.785.435zM138.826 133c-.008-.621.02-1.331-.166-1.949.197-.283 0-.801-.453-.745-6.098.749-12.316.436-18.444.308-6.473-.133-12.947-.263-19.421-.275-5.698-.013-11.388.018-17.086-.097-4.957-.1-10.248-.539-15.16.257h-.002l-.028.004-.006.002c-.184.023-.37.144-.418.344-.258 1.104-.267 2.428-.083 3.567-.241.19-.126.649.26.655 12.661.23 25.358-.037 38.026.053 6.007.044 12.014.124 18.02.208 4.523.063 9.246.541 13.754.242.187-.013.29-.109.334-.231.254.218.715.202.805-.189.157-.699.077-1.444.068-2.154zm-1.221 1.706c-3.557-.898-7.826-.382-11.476-.436a2218.37 2218.37 0 00-19.132-.22c-6.478-.042-12.956-.031-19.433-.076-6.316-.045-12.732-.264-19.035.297a149.92 149.92 0 01-.054-3.421c0-.029-.01-.049-.014-.075 4.844.57 9.889.419 14.758.521 5.699.121 11.39.104 17.09.107 6.465.004 12.929.125 19.394.208 6.032.079 12.141.359 18.148-.335-.119.552-.099 1.159-.107 1.697-.008.587-.064 1.208.008 1.799a.501.501 0 00-.147-.066z"
        className={'dark:fill-white fill-black'}
      />
    </svg>
  );
};

export default function LearningPathPage() {
  return (
    <div className="w-full pt-14 sm:pt-10">
      <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 sm:auto-rows-auto sm:gap-y-8 sm:gap-x-3 lg:flex lg:flex-row lg:h-auto lg:gap-x-2">
        <div className="sm:col-span-full sm:col-start-1 md:row-span-1 lg:grow">
          <h1 className="text-black dark:text-white m-0 font-normal text-xl my-3 md:px-1.5 rounded-sm md:bg-accent max-w-max">
            I&#39;m Learning...
          </h1>

          <p className="prose prose-zinc dark:prose-invert prose-p:leading-normal prose-p:my-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus hic obcaecati ut veniam dolore libero magnam quam ex
            ipsam quia qui aliquam officiis consequatur quasi aspernatur odit
            similique, quo cum?
          </p>
        </div>

        <div className="sm:col-span-1 sm:h-auto lg:w-[420px]">
          <MediaTabs />
        </div>

        <div className="hidden sm:flex sm:row-start-2 sm:col-start-2 sm:mx-auto">
          <SketchBooksImg className="ring-1 ring-ring/50 w-11/12 sm:size-full xl:size-64 bg-white dark:bg-black" />
        </div>
      </div>

      <Separator className="my-4" />
    </div>
  );
}
