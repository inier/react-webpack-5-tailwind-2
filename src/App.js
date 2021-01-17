import React from 'react'
import Text from '@/components/Text'
import View from '@/components/View'
import Icon from '@/assets/icons/favicon.png'
import './app.styles.scss'

class App extends React.Component {
  render() {
    return (
      <div className='bg-blue-500 px-3 py-2'>
        <Text>Webpack 5 boilerplate </Text>
        <Text>with React 17,</Text>
        <Text component={'h1'}> Tailwind 2,</Text>
        <Text component={'h2'}> using babel,</Text>
        <Text component={'h3'}> sass,</Text>
        <Text>with a hot dev server </Text>
        <Text>and an optimized production build.</Text>
        <View className={'bg-red-500 text-white px-3 py-2'}>
          <Text component={'h4'}>process.env.API_URL:</Text>
          <Text component={'h5'}>{process.env.API_URL} !!! </Text>
          <Text component={'h6'}>
            Make sure to put both .env.* files in gitignore.
          </Text>
        </View>
        <View className='flex h-40 max-w-full overflow-auto scrolling-touch'>
          <img className='flex-1 object-contain px-2 py-2 mr-2' src={Icon} />
          <img className='flex-1 object-contain px-2 py-2 mr-2' src={Icon} />
          <img className='flex-1 object-contain px-2 py-2' src={Icon} />
        </View>
        <View className='flex h-40 max-w-full overflow-auto scrolling-touch'>
          <img className='flex-1 object-contain px-2 py-2' src={Icon} />
        </View>
        <View className='flex h-40 max-w-full overflow-auto scrolling-touch'>
          <img className='flex-1 object-contain px-2 py-2' src={Icon} />
        </View>
        <View className='flex h-40 max-w-full overflow-auto scrolling-touch'>
          <img className='flex-1 object-contain px-2 py-2' src={Icon} />
        </View>
      </div>
    )
  }
}

export default App
