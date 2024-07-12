import { Space, Tag, type TableProps } from 'antd';
import eyesSvg from '@/assets/svg/eyes.svg';
import { Button, ConfigProvider, } from 'antd';

interface DataType {
  key: string;
  equipment: string;
  resourceArrange: string;
  timing: object;
  state: number;
  createTime: string
}


const columns: TableProps<DataType>['columns'] = [
  {
    title: '设备',
    dataIndex: 'equipment',
    key: 'equipment',
    render: (text) => <div>{text}</div>,
    fixed: 'left',

  },
  {
    title: '资源配置',
    dataIndex: 'resourceArrange',
    key: 'resourceArrange',
    render: (res) => {


      return (
        <div className=' flex    items-center'>
          <div><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
              <path id="Vector" d="M27.2122 15.0027C27.2122 14.8561 27.1874 14.7334 27.1804 14.7188C27.175 14.6461 27.1502 14.5137 27.1272 14.4441C27.121 14.4269 27.113 14.4087 27.1059 14.3914C27.0935 14.3515 27.0802 14.3126 27.0652 14.2816C24.8131 9.35567 19.9643 6.04492 15.0013 6.04492C10.0391 6.04492 5.19074 9.35261 2.94886 14.2519C2.92185 14.305 2.90278 14.356 2.89082 14.4003C2.88551 14.4149 2.87931 14.4286 2.87445 14.4415C2.83014 14.5713 2.82927 14.6616 2.83281 14.6381C2.812 14.7334 2.79294 14.923 2.79294 14.923C2.78763 14.9801 2.78763 15.0257 2.79384 15.0824C2.79384 15.0824 2.81287 15.2481 2.8222 15.2818C2.82483 15.3287 2.83635 15.3969 2.85008 15.459H2.84918C2.86114 15.5121 2.87754 15.5635 2.90011 15.614C2.91166 15.653 2.92539 15.6893 2.93735 15.7168C5.19251 20.6435 10.04 23.9551 15.0013 23.9551C19.9652 23.9551 24.814 20.6462 27.0404 15.7717C27.0749 15.7079 27.0971 15.6477 27.1121 15.5954C27.1192 15.5794 27.1255 15.5653 27.1299 15.5511C27.1689 15.4376 27.1768 15.3393 27.1733 15.3393L27.1724 15.3402C27.1883 15.2614 27.2122 15.1436 27.2122 15.0027ZM25.5679 15.063C25.5671 15.0665 25.5653 15.0709 25.5635 15.0745C25.5608 15.0851 25.5564 15.0975 25.5537 15.1099C23.5497 19.4289 19.3185 22.3269 15.0013 22.3269C10.6947 22.3269 6.47093 19.4369 4.44697 15.1029C4.44209 15.0878 4.43855 15.0736 4.43324 15.0595C4.43234 15.0453 4.42971 15.0338 4.42884 15.0258C4.42707 15.0169 4.4253 15.0045 4.42395 14.9939V14.9828C4.42884 14.9646 4.43234 14.9465 4.43414 14.9266C4.43768 14.9159 4.44035 14.9057 4.44434 14.8942C6.4492 10.573 10.684 7.67375 15.0012 7.67375C19.3202 7.67375 23.5542 10.5757 25.5528 14.8902C25.5546 14.8986 25.5564 14.9057 25.5591 14.9115C25.5609 14.9186 25.5626 14.9257 25.5661 14.9332C25.5706 14.9656 25.5741 14.9975 25.5785 15.0134C25.5732 15.0302 25.5706 15.0461 25.5679 15.063Z" fill="#1890FF" />
              <path id="Vector_2" d="M15.0012 10.9296C12.7571 10.9296 10.9303 12.7555 10.9303 15.0001C10.9303 17.2442 12.7571 19.071 15.0012 19.071C17.2453 19.071 19.0722 17.2442 19.0722 15.0001C19.0722 12.7555 17.2453 10.9296 15.0012 10.9296ZM15.0012 17.4426C13.6555 17.4426 12.5587 16.3467 12.5587 15.0001C12.5587 13.6539 13.6555 12.558 15.0012 12.558C16.3479 12.558 17.4438 13.6539 17.4438 15.0001C17.4438 16.3467 16.3479 17.4426 15.0012 17.4426Z" fill="#1890FF" />
            </g>
          </svg>
          </div>
          {res}</div>
      )
    }
  },
  // {
  //     title: '状态',
  //     key: 'state',
  //     dataIndex: 'state',
  //     render: (_, ) => (
  //       <>
  //         {state.map((tag) => {
  //           let color = tag.length > 5 ? 'geekblue' : 'green';
  //           if (tag === 'loser') {
  //             color = 'volcano';
  //           }
  //           return (
  //             <Tag color={color} key={tag}>
  //               {tag.toUpperCase()}
  //             </Tag>
  //           );
  //         })}
  //       </>
  //     ),
  //   },
  {
    title: '状态',
    key: 'state',
    dataIndex: 'state',
    render: ((state) => {

      return (
        <>
          <div className='flex items-center gap-1'>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle id="Ellipse 1" cx="4" cy="4" r="4" fill={state == 0 && '#FFBF00' || state == 1 && '#52C41A' || state == 2 && '#BFBFBF'} />
            </svg>

            <div>{state == 0 && '已停止' || state == 1 && '运行中' || state == 2 && '已释放'} </div>
          </div>
          <div className='flex items-center gap-1'>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <circle id="Ellipse 1" cx="4" cy="4" r="4" fill="##FFFFFF00" />
            </svg>

            <div className=' text-sm text-fontGray'>1算力节点/每小时</div>
          </div>
        </>
      )



    })

  },
  {
    title: '计时',
    dataIndex: 'timing',
    key: 'timing',
    render: (data) => {
      return (
        <>
          <div>已运行 {data.runTime}</div>
          <div className='text-fontGray text-sm' >{data.stopTime} 后自动停止</div>
        </>

      )
    }
  },

  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, item) => {

      return (
        <>
          <div className=' text-fontBlue'>
            <div className='focus:text-red'>进入开发环境</div>
            <div className='flex gap-2'>
              <div>编辑</div>
              {item.state == 0 && <div>启动</div>}
              {item.state == 1 && <div>停用</div>}
              <div className={`  hover:text-green-500  hover:text-opacity-60  ${item.state == 0 ? "text-green-500" : ' text-fontGray '} `} >释放</div>
            </div>
          </div>
        </>
      )
    }
  },
];
const data: DataType[] = [
  {
    key: '1',
    equipment: '我的算力设备',
    resourceArrange: '10%A001',
    state: 0,
    timing: {
      runTime: '1h50m',
      stopTime: '60h9m'
    },
    createTime: '2024-05-10 14:00:00'

  },
  {
    key: '2',
    equipment: '我的算力设备',
    resourceArrange: '10%A001',
    state: 1,
    timing: {
      runTime: '1h50m',
      stopTime: '60h9m'
    },
    createTime: '2024-05-10 14:00:00'


  },
  {
    key: '3',
    equipment: '我的算力设备',
    resourceArrange: '10%A001',
    state: 2,
    timing: {
      runTime: '1h50m',
      stopTime: '60h9m'
    },
    createTime: '2024-05-10 14:00:00'


  },
  {
    key: '4',
    equipment: '我的算力设备',
    resourceArrange: '10%A001',
    state: 2,
    timing: {
      runTime: '1h50m',
      stopTime: '60h9m'
    },
    createTime: '2024-05-10 14:00:00'

  },
  {
    key: '4',
    equipment: '我的算力设备',
    resourceArrange: '10%A001',
    state: 2,
    timing: {
      runTime: '1h50m',
      stopTime: '60h9m'
    },
    createTime: '2024-05-10 14:00:00'

  },
  {
    key: '4',
    equipment: '我的算力设备',
    resourceArrange: '10%A001',
    state: 2,
    timing: {
      runTime: '1h50m',
      stopTime: '60h9m'
    },
    createTime: '2024-05-10 14:00:00'

  },
  {
    key: '4',
    equipment: '我的算力设备',
    resourceArrange: '10%A001',
    state: 2,
    timing: {
      runTime: '1h50m',
      stopTime: '60h9m'
    },
    createTime: '2024-05-10 14:00:00'

  },



  //  {
  //   key: '4',
  //   equipment: '我的算力设备',
  //   resourceArrange: '10%A001',
  //   state: 2,
  //   timing: {
  //     runTime: '1h50m',
  //     stopTime: '60h9m'
  //   },
  //   createTime: '2024-05-10 14:00:00'

  // },

];

export {
  columns,
  data
}